import * as React from 'react';
import css from './index.module.css';
import cx from 'classnames';

export const XColumn: React.FunctionComponent<IXColumn> = (props) => {
  return (
    <div 
      className={cx(
        css.xcolumn,
        props.className,
        props.inside ? css.xcolumn__space_inside : '',
        props.space ? css[`xcolumn__space_${props.space}`] : ''
      )}
      onClick={props.onClick}
      >
      {props.children}
    </div>
  );
};

interface IXColumn {
  className?: string;
  onClick?: () => void;
  inside?: boolean;
  space?: 'x' | 'y' | 'z';
}