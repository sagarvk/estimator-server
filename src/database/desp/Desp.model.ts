import { Document } from 'mongoose';

export type DespDto = {
  desp: string;
  rate: number;
  unit: string;
  category: string;
  percent: number;
  state: string;
};

export type Desp = DespDto & Document;
