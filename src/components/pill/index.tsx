import * as React from 'react';
import css from './index.module.css';
import cx from 'classnames';

export const Pill: React.FC<IPill> = (props) => {
  return (
    <div className={cx(
      css.pill,
      props.className
    )}>
      {props.children}
    </div>
  );
};

export interface IPill {
  className?: string;
}