
import prisma from "./prisma";


const getPrayers = async () => {
    try {
        const prayers = await prisma.prayer.findMany({
            where: {
                status: {
                    in: ['APPROVED', 'PENDING', 'REJECTED']
                }
            }
        });
        return { prayers };
    } catch (error) {
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


const getTodaysPrayer = async () => {
    try {
        const todaysPrayer = await prisma.prayer.findFirst({
            where: {
                status: 'APPROVED',
                today: true
            },
            orderBy: {
                createdAt: 'desc'
            },
        });
        return { todaysPrayer };
    } catch (error) {
        return { error }
    }
}










export {
    getPrayers, addPrayer, getTodaysPrayer
}