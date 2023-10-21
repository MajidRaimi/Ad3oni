import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export const GET = async () => {

    try {

        const all_prayers = await prisma.prayer.findMany({
            select: {
                plainText: true,
                formattedText: true
            },
            where: {
                status: 'APPROVED'
            }
        })

        return NextResponse.json({
            'message': 'success',
            'status': 200,
            'prayers': all_prayers
        })

    } catch (err) {
        return NextResponse.json({
            'message': 'error',
            'status': 500,
            'error': err
        })
    }
}
