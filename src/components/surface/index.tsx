import React from 'react';
import { XColumn } from '../x-column';
import css from './index.module.css';
import cx from 'classnames';

export const Surface: React.FC<ISurface> = (props) => {
  return (
    <div className={cx(
      css.surface,
      props.className
    )}>
      <XColumn space={'y'} inside={true}>
      {
        props.label && 
          <label className={css.surface_label}>
            {props.label}
          </label>
      }
      { props.children }
      </XColumn>
    </div>
  );
} 

export interface ISurface {
  className?: string;
  label?: string;
}