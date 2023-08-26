import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'description',
})
export class Desciption {
  @Prop({ required: true })
  desciption: string;

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

export const DesciptionSchema = SchemaFactory.createForClass(Desciption);
export type DesciptionDocument = HydratedDocument<Desciption>;
