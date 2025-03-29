import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {HydratedDocument} from 'mongoose'
// lat, lng, rider

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

@Schema()
class RiderCoordinates {
    @Prop({required: true})
    lat: number;

    @Prop({required: true})
    lng: number;

    @Prop({required: true})
    riderId: string;
}

export const RiderCoordinatesSchema = SchemaFactory.createForClass(RiderCoordinates);