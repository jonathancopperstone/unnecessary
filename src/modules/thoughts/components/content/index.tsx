import * as React from 'react';
import css from './index.module.css';
import cx from 'classnames';

export const Content: React.FC<IContent> = (props) => {
  return (
    <div className={cx(
      css.content,
      props.className
    )}>
      <div className={css.content_view}>
        {props.children}
      </div>
    </div>
  );
};

export interface IContent {
  className?: string;
}