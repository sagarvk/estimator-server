import { Document } from 'mongoose';

export type ClientDto = {
  customerName: string;
  address: string;
  state: string;
  length: number;
  width: number;
  area: number;
  floors: number;
  propertyType: string;
  quality: string;
  mobile: number;
  mail: string;
  orderId: string;
  paymentId: string;
  fees: number;
  paymentStatus: string;
  pid: string;
};

export type Client = Document & ClientDto;
