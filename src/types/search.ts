export type Search = {
  _id: string;
  searchTerm: string;
  results: Array<string>;
  dateSearch: string;
  comment: null | string;
};

export type Searches = Search[];
