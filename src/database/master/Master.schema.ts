import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'master',
})
export class Master {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  addressLine1: string;

  @Prop({ required: true })
  addressLine2: string;

  @Prop({ required: true })
  contact: string;

  @Prop({ required: true })
  keyId: string;

  @Prop({ required: true })
  keySecret: string;

  @Prop({ required: true })
  charges: number;
}

export const MasterSchema = SchemaFactory.createForClass(Master);
export type MasterDocument = HydratedDocument<Master>;
