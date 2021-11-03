import { IArticle } from '../types';
import { ARTICLES } from '../articles'

export const getArticle = (id: string): IArticle | undefined => {
  return ARTICLES.find((article: IArticle) => article.id === id);
}