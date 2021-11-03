import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { XColumn } from '../../../../components/x-column';
import css from './index.module.css';
import { getArticle } from '../../resolvers/get-article';

export const Thought: React.FC<IThought> = (props) => {
  
  const thought = getArticle(props.match.params.id);
  
  return (
    <XColumn>
      <div className={css.thought_splash}>
        {thought?.title}
      </div>
    </XColumn>
  );
};

export interface IThought extends RouteComponentProps<{id: string}> {
  className?: string;
}