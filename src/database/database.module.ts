import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsService } from './client/Client.service';
import { ClientController } from './client/Client.controller';
import { Client, ClientSchema } from './client/Client.schema';

import { DesciptionService } from './description/Description.service';
import { DesciptionController } from './description/Description.controller';
import { Desciption, DesciptionSchema } from './description/Description.schema';

import { MasterService } from './master/Master.service';
import { MasterController } from './master/Master.controller';
import { Master, MasterSchema } from './master/Master.schema';

import { ProjectTypeService } from './property-type/project-type.service';
import { ProjectTypeController } from './property-type/project-type.controller';
import {
  ProjectType,
  ProjectTypeSchema,
} from './property-type/project-type.schema';

import { QualityService } from './quality/Quality.service';
import { QualityController } from './quality/Quality.controller';
import { Quality, QualitySchema } from './quality/Quality.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
      { name: Desciption.name, schema: DesciptionSchema },
      { name: Master.name, schema: MasterSchema },
      { name: ProjectType.name, schema: ProjectTypeSchema },
      { name: Quality.name, schema: QualitySchema },
    ]),
  ],
  controllers: [
    ClientController,
    DesciptionController,
    MasterController,
    ProjectTypeController,
    QualityController,
  ],
  providers: [
    ClientsService,
    DesciptionService,
    MasterService,
    ProjectTypeService,
    QualityService,
  ],
  exports: [
    ClientsService,
    DesciptionService,
    MasterService,
    ProjectTypeService,
    QualityService,
  ],
})
export class DatabaseModule {}
