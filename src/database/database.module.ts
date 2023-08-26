import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientsService } from './client/Client.service';
import { ClientController } from './client/Client.controller';
import { Client, ClientSchema } from './client/Client.schema';

import { DespService } from './desp/Desp.service';
import { DespController } from './desp/Desp.controller';
import { Desp, DespSchema } from './desp/Desp.schema';

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
      { name: Desp.name, schema: DespSchema },
      { name: Master.name, schema: MasterSchema },
      { name: ProjectType.name, schema: ProjectTypeSchema },
      { name: Quality.name, schema: QualitySchema },
    ]),
  ],
  controllers: [
    ClientController,
    DespController,
    MasterController,
    ProjectTypeController,
    QualityController,
  ],
  providers: [
    ClientsService,
    DespService,
    MasterService,
    ProjectTypeService,
    QualityService,
  ],
  exports: [
    ClientsService,
    DespService,
    MasterService,
    ProjectTypeService,
    QualityService,
  ],
})
export class DatabaseModule {}
