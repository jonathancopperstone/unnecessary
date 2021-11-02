import * as React from 'react';
import css from './index.module.css';
import cx from 'classnames';

export const XRow: React.FunctionComponent<IXRow> = (props) => {
  return (
    <div 
      className={cx(
        css.xrow,
        props.className,
        props.inside ? css.xrow__space_inside : '',
        props.space ? css[`xrow__space_${props.space}`] : ''
      )}
      style={{
        justifyContent: props.justify || 'inherit',
        alignItems: props.align || 'inherit',
        flexGrow: props.grow || 'inherit'
      }}
      >
      {props.children}
    </div>
  );
};

interface IXRow {
  className?: string;
  grow?: number;
  justify?: string;
  align?: string;
  inside?: boolean;
  space?: 'x' | 'y' | 'z';
}