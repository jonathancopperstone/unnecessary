import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { XColumn } from '../../../../components/x-column';
import { Content } from '../../components/content';
import css from './index.module.css';
import { getArticle } from '../../resolvers/get-article';
import { CategoryPill } from '../../../categories/components/category-pill';

export const Thought: React.FC<IThought> = (props) => {
  
  const thought = getArticle(props.match.params.id);
  
  if (!thought) {
    return null;
  }
  
  return (
    <XColumn className={css.thought}>
    
      <div 
        className={css.thought_splash}
        style={{ backgroundImage: `url(${thought.splash})` }}>
        <Content className={css.thought_splash_content}>
          <XColumn 
            inside={true} 
            space={'x'}
          >
            <CategoryPill category={thought.category} />
            <h1>{thought.title}</h1>
            <small>{thought.dateCreated}</small>
          </XColumn>
        </Content>
      </div>
      
      <div 
        className={css.thought_short}>
        <Content>
          <p>{thought.short}</p>
        </Content>
      </div>
      
      
    
    </XColumn>
  );
};

export interface IThought extends RouteComponentProps<{id: string}> {
  className?: string;
}