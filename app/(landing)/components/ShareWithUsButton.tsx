'use client'
import { Tajawal } from 'next/font/google';

import classNames from "classnames"
import { useDialog } from '@/app/hooks';
import AddPrayerModal from '@/app/modals/AddPrayerModal';

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const ShareWithUsButton = () => {

    const {openDialog, closeDialog, dialogRef} = useDialog()

    return (
        <div className='flex items-start h-24 justify-center mx-24 lg:justify-end'>
            <button className={classNames('bg-white w-36 h-12 text-primary rounded-lg  font-serif pt-1 duration-300 border border-transparent hover:text-white hover:bg-transparent hover:border-white', tajawal.className,)} onClick={openDialog}>
                شاركنا دعاءك
            </button>

            <AddPrayerModal
                closeDialog={closeDialog}
                dialogRef={dialogRef}
            />

        </div>
    )
}

export default ShareWithUsButton
