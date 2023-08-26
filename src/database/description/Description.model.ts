import { Document } from 'mongoose';

export type DesciptionDto = {
  description: string;
  rate: number;
  unit: string;
  category: string;
  percent: number;
  state: string;
};

export type Desp = DesciptionDto & Document;
