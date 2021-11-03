import { TCategory } from '../../categories/types';

export type IArticles = IArticle[]

export interface IArticle {
  id: string;
  title: string;
  category: TCategory;
  short: string;
  body: string;
  dateCreated: string;
  dateUpdated?: string;
}
  