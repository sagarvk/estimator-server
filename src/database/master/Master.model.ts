import { Document } from 'mongoose';

export type MasterDto = {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  contact: string;
  keyId: string;
  keySecret: string;
  charges: number;
};

export type Master = MasterDto & Document;
