import { FC } from "react";

import classes from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  navigationPaths: string[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ navigationPaths }) => {
  if (navigationPaths.length === 0) {
    return null;
  }

  return (
    <div className={classes.breadcrumb}>
      {navigationPaths.map((item, index) => (
        <span key={index} className={classes.breadcrumb__text}>
          {item}
          {index < navigationPaths.length - 1 ? " / " : ""}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
