export enum CityMark {
  Standard = 'Standard',
  Premium = 'Premium',
}

// Type for the offer (a flat, apartments, etc)
export type CityData = {
  id: number | string;
  title: string;
  city: string;
  rating: number;
  mark: CityMark;
  price: number;
  type: string;
  imgId: number | string;
};

export type Image = {
  id: number | string;
  src: string;
};
