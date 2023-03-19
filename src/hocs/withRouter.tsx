import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export type WithRouterProps = {
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: Record<string, string>;
};

function withRouter<Props extends WithRouterProps>(Component: React.ComponentType<Props>) {
  return (props: Omit<Props, keyof WithRouterProps>) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component {...(props as Props)} location={location} navigate={navigate} params={params} />
    );
  };
}

export default withRouter;
