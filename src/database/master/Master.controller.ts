import { Body, Controller, Get, Post } from '@nestjs/common';
import { Master } from './Master.schema';
import { MasterService } from './Master.service';
import { MasterDto } from './Master.model';

@Controller('master')
export class MasterController {
  constructor(private masterService: MasterService) {}

  @Get()
  getDesps(): Promise<Master[]> {
    return this.masterService.findAll();
  }

  @Post()
  createDesp(@Body() createMasterDto: MasterDto): Promise<Master> {
    return this.masterService.create(createMasterDto);
  }
}
