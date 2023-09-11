import { Document } from 'mongoose';

export type Quality = {
  name: string;
  rate: number;
};

export type ProjectTypeDto = {
  projectName: string;
  projectDescription: string;
  qualities: Quality[];
};

export type ProjectType = ProjectTypeDto & Document;
