import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectType } from './project-type.schema';
import { ProjectTypeService } from './project-type.service';
import { ProjectTypeDto } from './project-type.model';

@Controller('projectType')
export class ProjectTypeController {
  constructor(private projectTypeService: ProjectTypeService) {}

  @Get()
  getDesps(): Promise<ProjectType[]> {
    return this.projectTypeService.findAll();
  }

  @Post()
  createDesp(@Body() createDespDto: ProjectTypeDto): Promise<ProjectType> {
    return this.projectTypeService.create(createDespDto);
  }
}
