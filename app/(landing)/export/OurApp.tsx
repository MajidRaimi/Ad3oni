'use client'
import classNames from "classnames"
import { Tajawal } from "next/font/google"
import { useOs } from '@mantine/hooks';


const tajawal = Tajawal({
    subsets: ['arabic'],
    weight: ['700', '300', '500']
})


const OurApp = () => {

    const os = useOs();
    return (
        <section className='bg-white '>
            <h1 className={classNames('text-4xl font-bold text-center py-24 md:text-5xl  text-primary ', tajawal.className)}>تطبيقنا</h1>
            <h1>{os}</h1>
        </section>
    )
}

export default OurApp
