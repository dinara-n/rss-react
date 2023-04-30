import React from 'react';
import styles from './SiteContainer.module.css';
function SiteContainer(props) {
    const { children } = props;
    return (React.createElement("div", { className: styles.container, "data-testid": "SiteContainer" }, children));
}
export default SiteContainer;
