'use server';

import { addPrayer } from "@/lib/prayers";

const addPrayerAction = async (prayer: string) => {
    await addPrayer(prayer);
}



export {
    addPrayerAction
}