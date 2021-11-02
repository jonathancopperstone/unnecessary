import * as React from 'react';
import css from './index.module.css';

export const Header: React.FunctionComponent<IHeader> = (props) => {
  return (
    <div className={css.header}>
    </div>
  );
};

export interface IHeader {
  className?: string;
}