import { Body, Controller, Get, Post } from '@nestjs/common';
import { Quality } from './Quality.schema';
import { QualityService } from './Quality.service';
import { QualityDto } from './Quality.model';

@Controller('quality')
export class QualityController {
  constructor(private qualityService: QualityService) {}

  @Get()
  getDesps(): Promise<Quality[]> {
    return this.qualityService.findAll();
  }

  @Post()
  createDesp(@Body() createQualityDto: QualityDto): Promise<Quality> {
    return this.qualityService.create(createQualityDto);
  }
}
