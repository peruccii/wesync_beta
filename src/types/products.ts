export interface Product  {
 id: number;
 title: string;
 price: number;
 description: string;
 category: string;
 rating: {
  rate: number;
  count: number;
 }
}