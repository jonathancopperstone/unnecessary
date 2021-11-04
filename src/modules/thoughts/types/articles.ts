import { TCategory } from '../../categories/types';

export type IArticles = IArticle[]

export interface IArticle {
  id: string;
  splash?: string; // make this required
  splashAttribution?: string; // make this required
  title: string;
  category: TCategory;
  short: string;
  body: string;
  dateCreated: string;
  dateUpdated?: string;
}
  