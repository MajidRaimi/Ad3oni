import { getTodaysPrayer } from "@/lib/prayers"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export const GET = async () => {

    const todaysPrayer = await prisma.prayer.findFirst({
        where: {
            status: 'APPROVED',
            today: true,
        }
    })

    try {
        return NextResponse.json({
            'message': 'success',
            'status': 200,
            'plainText': todaysPrayer?.plainText,
            'formattedText': todaysPrayer?.formattedText,
        })
    } catch (e) {
        return NextResponse.json({
            'message': 'error',
            'status': 500,
            'error': e
        })
    }

}