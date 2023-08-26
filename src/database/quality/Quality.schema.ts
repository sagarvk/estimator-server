import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'quality',
})
export class Quality {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rate: number;

  @Prop({ required: true })
  propertyType: string;
}

export const QualitySchema = SchemaFactory.createForClass(Quality);
export type QualityDocument = HydratedDocument<Quality>;
