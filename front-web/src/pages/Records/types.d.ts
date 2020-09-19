declare type RecordsResponse = {
  content: RecordItem[];
  totalPages: number;
};

declare type RecordItem = {
  id: number;
  moment: string;
  name: string;
  age: number;
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
};

declare type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';
