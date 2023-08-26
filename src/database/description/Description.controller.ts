import { Body, Controller, Get, Post } from '@nestjs/common';
import { Desciption } from './Description.schema';
import { DesciptionService } from './Description.service';
import { DesciptionDto } from './Description.model';

@Controller('desp')
export class DesciptionController {
  constructor(private desciptionService: DesciptionService) {}

  @Get()
  getDesps(): Promise<Desciption[]> {
    return this.desciptionService.findAll();
  }

  @Post()
  createDesp(@Body() createDesciptionDto: DesciptionDto): Promise<Desciption> {
    return this.desciptionService.create(createDesciptionDto);
  }
}
