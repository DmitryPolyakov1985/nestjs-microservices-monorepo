import { Injectable } from '@nestjs/common';
import { InjectModel, ModelDefinition } from '@nestjs/mongoose';
import { RiderCoordinates } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinates.name)
        private readonly riderCoordinatesModel: Model<RiderCoordinates>
    ) {}
    async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDTO) {
        return await this.riderCoordinatesModel.create(createCoordinatesDTO);
    }

}
