import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'desp',
})
export class Desp {
  @Prop({ required: true })
  desp: string;

  @Prop({ required: true })
  rate: number;

  @Prop({ required: true })
  unit: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  percent: number;

  @Prop({ required: true })
  state: string;
}

export const DespSchema = SchemaFactory.createForClass(Desp);
export type DespDocument = HydratedDocument<Desp>;
