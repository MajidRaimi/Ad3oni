import { Tajawal } from "next/font/google"
import classNames from "classnames"
import { getTodaysPrayer } from "@/lib/prayers"

const tajawal = Tajawal(
    {
        weight: ['400'],
        subsets: ['arabic']
    }
)

const PrayerFormattedText = async () => {
    const { todaysPrayer } = await getTodaysPrayer()

    return (
        <div>
            <div className='flex flex-col text-white items-center justify-around h-full md:flex-row mx-auto px-12'>
                <h1 className='rotate-90 text-9xl md:rotate-0 lg:text-[9.5rem]'>&#123;</h1>
                <h1 className='text-4xl text-center  leading-[72px] lg:text-5xl lg:leading-[84px] lg:px-24'>
                    {todaysPrayer?.formattedText}
                </h1>
                <h1 className='rotate-90 text-9xl md:rotate-0 lg:text-[9.5rem]'>&#125;</h1>
            </div>
            <h1 className={classNames('text-center hidden lg:block text-xl', tajawal.className)}>دعاء اليوم</h1>
        </div>
    )
}

export default PrayerFormattedText
