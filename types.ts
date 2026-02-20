
export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
  createdAt: number;
}

export enum ViewMode {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ADMIN = 'ADMIN',
  DETAIL = 'DETAIL'
}
