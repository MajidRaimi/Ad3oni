import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"


export const GET = async () => {
    const prayer_count = await prisma.prayer.count({
        where : {
            status: 'APPROVED'
        }
    })

    return NextResponse.json({
        'message': 'Welcome to Ad3oni API!',
        'message_ar' : 'مرحبا بك في أدعوني API!',
        routes : {
            '/all' : {
                'method' : 'GET',
                'description' : 'Get all prayers'
            },
            '/today' : {
                'method' : 'GET',
                'description' : 'Get today prayer'
            },
            "/[id]" : {
                'method' : 'GET',
                'description' : 'Get prayer by id',
                'info' : `Access specific prayer with numbers starting from 0 till ${prayer_count}`
            }
        }
    })
}
