export interface Authors {
    author: string;
  }

 export interface Obra {
    title: string;
    lines: string[];
  }

  export interface SearchObraResponse {
    title:     string;
    author:    Author;
    lines:     string[];
    linecount: string;
}

export enum Author {
    AmyLevy = "Amy Levy",
}
