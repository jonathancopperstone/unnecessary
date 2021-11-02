import * as React from 'react';
import { Surface } from '../../../../components/surface';
import { XColumn } from '../../../../components/x-column';
import { XRow } from '../../../../components/x-row';
import { Pill } from '../../../../components/pill';
import css from './index.module.css';

import { ARTICLES } from "../../articles";

export const ThoughtsList: React.FC<IThoughtsList> = (props) => {
  return (
    <Surface 
      label={'Unnecessary Thoughts'}
      className={css.thoughtsList}>
      <XColumn space={'y'} inside={true}>
        {
          ARTICLES.map((article) => {
            return (
              <XColumn space={'x'} inside={true} className={css.thoughtsList_article}>
                <h2>{article.title}</h2>
                <XRow space={'x'} inside={true} align={'center'}>
                  <Pill>{article.category}</Pill>
                  <small>{article.dateCreated}</small>
                </XRow>
                <p>{article.short}</p>
              </XColumn>
            );
          })
        }
      </XColumn>
    </Surface>
  );
};

export interface IThoughtsList {
  className?: string;
}