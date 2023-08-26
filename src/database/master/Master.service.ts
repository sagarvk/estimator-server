import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Master } from './Master.schema';
import { MasterDto } from './Master.model';

@Injectable()
export class MasterService {
  constructor(@InjectModel(Master.name) private masterModel: Model<Master>) {}

  async create(createMasterDto: MasterDto): Promise<Master> {
    const createdMaster = new this.masterModel(createMasterDto);
    return createdMaster.save();
  }

  async findAll(): Promise<Master[]> {
    return this.masterModel.find().exec();
  }
}
