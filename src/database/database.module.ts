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

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
      { name: Desciption.name, schema: DesciptionSchema },
      { name: Master.name, schema: MasterSchema },
      { name: ProjectType.name, schema: ProjectTypeSchema },
    ]),
  ],
  controllers: [
    ClientController,
    DesciptionController,
    MasterController,
    ProjectTypeController,
  ],
  providers: [
    ClientsService,
    DesciptionService,
    MasterService,
    ProjectTypeService,
  ],
  exports: [
    ClientsService,
    DesciptionService,
    MasterService,
    ProjectTypeService,
  ],
})
export class DatabaseModule {}
