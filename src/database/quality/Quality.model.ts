import { Document } from 'mongoose';

export type QualityDto = {
  name: string;
  rate: number;
  propertyType: string;
};

export type Quality = QualityDto & Document;
