import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desciption } from './Description.schema';
import { DesciptionDto } from './Description.model';

@Injectable()
export class DesciptionService {
  constructor(
    @InjectModel(Desciption.name) private despModel: Model<Desciption>,
  ) {}

  async create(createDespDto: DesciptionDto): Promise<Desciption> {
    const createdDesp = new this.despModel(createDespDto);
    return createdDesp.save();
  }

  async findAll(): Promise<Desciption[]> {
    return this.despModel.find().exec();
  }
}
