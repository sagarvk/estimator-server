import { Document } from 'mongoose';

export type ProjectTypeDto = {
  projectName: string;
  projectDescription: string;
};

export type ProjectType = ProjectTypeDto & Document;
