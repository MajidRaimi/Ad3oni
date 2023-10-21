import classNames from "classnames"
import { Tajawal } from "next/font/google"

const tajawal = Tajawal({
    subsets: ['arabic'],
    weight: ['700', '300', '500']
})

const AboutUs = () => {
    return (
        <section className=' bg-white'>
            <h1 className={classNames('text-4xl font-bold text-center py-24 md:text-5xl  text-primary ', tajawal.className)}>عن ادعوني</h1>

            <div className='flex flex-col lg:grid lg:flex-row gap-16 mx-16 text-justify grid-cols-2 place-items-center'>
                <div className='background  text-4xl text-center text-white p-8 lg:pt-8 rounded-xl lg:w-full lg:h-full flex flex-col items-center justify-center lg:px-24'>
                    <h1 className='mt-8'>
                    وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ۚ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ
                    </h1>
                </div>

                <div dir="rtl" className={classNames(tajawal.className, 'text-primary lg:text-md gap-8 grid')}>
                    <p>
                        إدعوني هو موقع وبوت يقدمون مبادرة خيرية فريدة تهدف إلى تذكير الناس بالدعاء وذكر الله. تأسس هذا المشروع بفكرة بسيطة وجميلة، وهي إرسال دعاء يومي عبر مختلف الوسائل الاجتماعية وتطبيقات المراسلة مثل ديسكورد، تيليجرام، تويتر، ومن خلال تطبيق IOS و Andriod.
                    </p>
                    <p>
                        إدعوني هو أكثر من مجرد بوت، هو مشروع يجمع بين التكنولوجيا والدين الاسلامي، ويساهم في تذكير الناس من جميع أنحاء العالم بالذكر بشكل يومي.
                    </p>
                </div>

            </div>


        </section>
    )
}

export default AboutUs
