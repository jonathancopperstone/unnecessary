export type IArticles = IArticle[]

export interface IArticle {
  title: string;
  category: ICategory;
  short: string;
  body: string;
  dateCreated: string;
  dateUpdated?: string;
}

export type ICategory = 
  'Design' |
  'Development' |
  'Branding' |
  'Customer Experience' |
  'Marketing';
  