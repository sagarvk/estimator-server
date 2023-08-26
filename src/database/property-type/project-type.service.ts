import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectType } from './project-type.schema';
import { ProjectTypeDto } from './project-type.model';

@Injectable()
export class ProjectTypeService {
  constructor(
    @InjectModel(ProjectType.name)
    private projectTypeModel: Model<ProjectType>,
  ) {}

  async create(createProjectTypeDto: ProjectTypeDto): Promise<ProjectType> {
    const createdProjectType = new this.projectTypeModel(createProjectTypeDto);
    return createdProjectType.save();
  }

  async findAll(): Promise<ProjectType[]> {
    return this.projectTypeModel.find().exec();
  }
}
