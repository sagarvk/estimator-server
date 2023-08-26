import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desp } from './Desp.schema';
import { DespDto } from './Desp.model';

@Injectable()
export class DespService {
  constructor(@InjectModel(Desp.name) private despModel: Model<Desp>) {}

  async create(createDespDto: DespDto): Promise<Desp> {
    const createdDesp = new this.despModel(createDespDto);
    return createdDesp.save();
  }

  async findAll(): Promise<Desp[]> {
    return this.despModel.find().exec();
  }
}
