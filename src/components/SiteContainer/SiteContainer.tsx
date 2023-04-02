import React from 'react';
import styles from './SiteContainer.module.css';

type SiteContainerProps = {
  children: React.ReactNode;
};

function SiteContainer(props: SiteContainerProps) {
  const { children } = props;
  return (
    <div className={styles.container} data-testid="SiteContainer">
      {children}
    </div>
  );
}

export default SiteContainer;
