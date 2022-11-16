export type Image = {
  id: string;
  src: string;
};

export type User = {
  id: string;
  avatarId: string;
  name: string;
  email: string;
};

export type Review = {
  id: string;
  authorId: string;
  content: string;
  rating: number;
  date: Date;
};

export enum PropertyMark {
  Standard = 'Standard',
  Premium = 'Premium',
}

export type PropertyData = {
  id: string;
  title: string;
  city: string;
  rating: number;
  mark: PropertyMark;
  price: number;
  type: string;
  imageIds: string[];
  reviewIds: string[];
  options: string[];
};
