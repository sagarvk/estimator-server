import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quality } from './Quality.schema';
import { QualityDto } from './Quality.model';

@Injectable()
export class QualityService {
  constructor(
    @InjectModel(Quality.name)
    private qualityModel: Model<Quality>,
  ) {}

  async create(createQualityDto: QualityDto): Promise<Quality> {
    const createdQuality = new this.qualityModel(createQualityDto);
    return createdQuality.save();
  }

  async findAll(): Promise<Quality[]> {
    return this.qualityModel.find().exec();
  }
}
