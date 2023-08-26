import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'projectType',
})
export class ProjectType {
  @Prop({ required: true })
  projectName: string;

  @Prop({ required: true })
  projectDescription: string;
}

export const ProjectTypeSchema = SchemaFactory.createForClass(ProjectType);
export type ProjectTypeDocument = HydratedDocument<ProjectType>;
