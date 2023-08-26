import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'client',
})
export class Client {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  length: number;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  area: number;

  @Prop({ required: true })
  floors: number;

  @Prop({ required: true })
  propertyType: string;

  @Prop({ required: true })
  quality: string;

  @Prop({ required: true })
  mobile: number;

  @Prop({ required: true })
  mail: string;

  @Prop()
  orderId: string;

  @Prop()
  paymentId: string;

  @Prop()
  fees: number;

  @Prop()
  paymentStatus: string;

  @Prop()
  pid: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
export type ClientDocument = HydratedDocument<Client>;
