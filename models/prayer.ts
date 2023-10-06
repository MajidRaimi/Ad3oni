import { model, Schema } from 'mongoose';

export interface PrayerProps {
    text: string;
    date: Date;
}


const prayerSchema = new Schema<PrayerProps>({
    text: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: new Date()
    }
})


const Prayer = model('prayer', prayerSchema);
export default Prayer