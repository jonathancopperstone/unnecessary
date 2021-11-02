import * as React from 'react';
import { Pill } from '../../../../components/pill'
import { TCategory, ECategoryClassnameMap } from '../../types'
import css from './index.module.css';

export const CategoryPill: React.FC<ICategoryPill> = (props) => {
  
  const className = ECategoryClassnameMap[props.category];
  
  return (
    <Pill className={css[`categoryPill_${className}`]}>
      { props.category }
    </Pill>
  );
  
};

export interface ICategoryPill {
  category: TCategory;
}