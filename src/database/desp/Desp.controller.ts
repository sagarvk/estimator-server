import { Body, Controller, Get, Post } from '@nestjs/common';
import { Desp } from './Desp.schema';
import { DespService } from './Desp.service';
import { DespDto } from './Desp.model';

@Controller('desp')
export class DespController {
  constructor(private despService: DespService) {}

  @Get()
  getDesps(): Promise<Desp[]> {
    return this.despService.findAll();
  }

  @Post()
  createDesp(@Body() createDespDto: DespDto): Promise<Desp> {
    return this.despService.create(createDespDto);
  }
}
