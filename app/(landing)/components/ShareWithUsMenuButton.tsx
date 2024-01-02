'use client'
import { Tajawal } from 'next/font/google';

import classNames from "classnames"
import { useDialog } from '@/app/hooks';
import AddPrayerModal from '@/app/modals/AddPrayerModal';

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const ShareWithUsMenuButton = (
    { toggle }: {
        toggle: () => void
    }
) => {

    const { openDialog, closeDialog, dialogRef } = useDialog()

    const closeAndToggle = () => {
        closeDialog()
        toggle()
    }

    return (
        <div className='flex items-start h-24 justify-center mx-24 lg:justify-start'>
            <button className={classNames('bg-primary w-36 h-12 text-white rounded-lg  font-serif pt-1 duration-300 border border-transparent hover:text-primary hover:bg-transparent hover:border-primary', tajawal.className,)} onClick={openDialog}>
                شاركنا دعاءك
            </button>

            <AddPrayerModal
                closeDialog={closeAndToggle}
                dialogRef={dialogRef}
            />

        </div>
    )
}

export default ShareWithUsMenuButton
