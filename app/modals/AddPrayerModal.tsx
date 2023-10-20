import { useState, useRef, TextareaHTMLAttributes } from 'react';
import { X } from "lucide-react";
import { Tajawal } from "next/font/google";
import classNames from "classnames";

import { useArabic } from '../hooks';

interface DialogProps {
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement>
}

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})


const AddPrayerDialog: React.FC<DialogProps> = ({
    closeDialog,
    dialogRef
}) => {

    const {corrector} = useArabic()

    const [prayer, setPrayer] = useState('')
    const [error, setError] = useState('')

    const prayerRef = useRef<HTMLTextAreaElement>(null)


    const handleSubmit = () => {

    }

    const onPrayerChange = (prayer: string) => {
        setPrayer(prayer)
        setError('')

        if (!/^[؀-ۿ., ]*$/.test(prayer))
            setError('يجب أن يكون الدعاء باللغة العربية فقط')

        if (prayer.length > 2000) {
            setError('لا يمكن أن يتجاوز الدعاء 2000 حرف')
        }
    }

    const onCorrectorCheck = async () => {
        const correctedPrayer = await corrector(prayer);
        setPrayer(correctedPrayer)
        if(prayerRef.current) prayerRef.current.value = correctedPrayer;
    }


    return (
        <div className='text-primary'>
            <dialog className="modal" ref={dialogRef}>
                <div className="modal-box">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"
                        onClick={
                            () => {
                                setError('')
                                setPrayer('')
                                if (prayerRef.current) prayerRef.current.value = ''
                                closeDialog()
                            }
                        }
                    >
                        <X />
                    </button>
                    <form className='rtl text-end flex flex-col space-y-2'>
                        <h3 className="font-bold text-lg">  شاركنا دعاءك وأكسب الأجر</h3>
                        <div className='form-control'>
                            <label className='label'>
                                <span onClick={onCorrectorCheck} className={classNames('label-text text-blue-500 mb-[-24px] cursor-pointer', tajawal.className)}>تدقيق الأخطاء الأملائية</span>
                                <span className="label-text-alt"></span>
                            </label>
                            <textarea
                                dir='rtl'
                                placeholder="سبحان الله و بحمده، سبحان الله العظيم"
                                rows={10}
                                className={classNames('w-full text-start textarea textarea-bordered mt-4 rtl resize-none', tajawal.className, {
                                    'textarea-error': error
                                })}
                                onChange={(e) => onPrayerChange(e.target.value)}
                                required
                                ref={prayerRef}
                            ></textarea>
                            <label className='label'>
                                <span className={classNames('label-text-alt text-rose-500', tajawal.className)}>{error}</span>
                                <span className="label-text-alt">{prayer.length}/2000</span>
                            </label>
                        </div>

                        <button className={classNames('bg-primary text-white w-24 h-8  rounded-lg  font-serif pt-1 duration-300 border border-transparent ', tajawal.className, {
                            'text-black bg-slate-300 cursor-not-allowed': error,
                            'hover:text-primary hover:bg-white hover:border-primary': !error
                        })} disabled={!!error} onClick={closeDialog}>
                            مشاركة
                        </button>

                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default AddPrayerDialog;
