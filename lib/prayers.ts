
import prisma from "./prisma";


const getPrayers = async () => {
    try {
        const prayers = await prisma.prayer.findMany();
        return { prayers };
    } catch (error) {
        console.log(error);
        return { error }
    }
}


const addPrayer = async (prayer: string) => {
    try {
        const newPrayer = await prisma.prayer.create({
            data: {
                plainText: prayer
            }
        });
        return { newPrayer };
    } catch (error) {
        console.log(error);
        return { error }
    }
}












export {
    getPrayers, addPrayer
}