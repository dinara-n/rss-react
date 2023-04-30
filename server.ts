import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use(
    '*',
    async (
      request: { originalUrl: string },
      response: { write: (arg0: string) => void; end: () => void },
      next: (arg0: Error) => void
    ) => {
      const url = request.originalUrl;

      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const html = template.split('not rendered');

        const { render } = await vite.ssrLoadModule('./src/ServerApp.tsx');
        const { pipe } = await render(url, {
          onShellReady() {
            response.write(html[0]);
            pipe(response);
          },
          onAllReady() {
            response.write(html[0] + html[1]);
            response.end();
          },
        });
      } catch (error) {
        if (error instanceof Error) {
          vite.ssrFixStacktrace(error);
          next(error);
        }
      }
    }
  );

  app.listen(PORT, () => console.log('started'));
}

createServer();
