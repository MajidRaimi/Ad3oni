'use client'
import { useState, useRef, useTransition } from 'react';
import { X } from "lucide-react";
import { Tajawal, Cairo } from "next/font/google";
import classNames from "classnames";

import { useArabic } from '../hooks';
import { addPrayerAction } from '../_actions';
import { toast } from 'sonner';

interface DialogProps {
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement>
}

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const cairo = Cairo({
    weight: ['400'],
    subsets: ['arabic']
})

const AddPrayerDialog: React.FC<DialogProps> = ({
    closeDialog,
    dialogRef
}) => {

    const { corrector } = useArabic()

    const [isPending, startTransition] = useTransition()

    const [prayer, setPrayer] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async () => {

        if (!prayer || typeof prayer !== 'string') return
        startTransition(() => addPrayerAction(prayer))
        closeDialog()
        toast.success(' شكرا لك لمشاركة الدعاء، احتسب الأجر   🙏 ',
            {
                duration: 3000,
                className: classNames('pt-4', cairo.className),
                style: {
                    paddingTop: '20px'
                }
            }
        )
        setPrayer('')
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
                                closeDialog()
                            }
                        }
                    >
                        <X />
                    </button>
                    <form className='rtl text-end flex flex-col space-y-2'>
                        <h3 className="font-bold text-2xl">  شاركنا دعاءك وأكسب الأجر</h3>
                        <div className='form-control'>
                            <label className='label'>
                                <button type='button' disabled={!!error || !prayer || isPending} onClick={onCorrectorCheck} className={classNames('label-text text-blue-500 mb-[-24px] cursor-pointer', tajawal.className, {
                                    'text-slate-300 cursor-default': !prayer
                                })}>تدقيق الأخطاء الأملائية</button>
                                <span className="label-text-alt"></span>
                            </label>
                            <textarea
                                value={prayer}
                                dir='rtl'
                                placeholder="سبحان الله و بحمده، سبحان الله العظيم"
                                rows={10}
                                className={classNames('w-full text-start textarea textarea-bordered mt-4 rtl resize-none', tajawal.className, {
                                    'textarea-error': error
                                })}
                                onChange={(e) => onPrayerChange(e.target.value)}
                                required
                                disabled={isPending}
                            ></textarea>
                            <label className='label'>
                                <span className={classNames('label-text-alt text-rose-500', tajawal.className)}>{error}</span>
                                <span className="label-text-alt">{prayer.length}/2000</span>
                            </label>
                        </div>

                        <button className={classNames('bg-primary text-white w-24 h-8  rounded-lg  font-serif pt-1 duration-300 border border-transparent ', tajawal.className, {
                            'text-black bg-slate-300 cursor-not-allowed': error || !prayer,
                            'hover:text-primary hover:bg-white hover:border-primary': !error && prayer
                        })} disabled={!!error || !prayer || isPending} onClick={handleSubmit}
                            type='button'
                        >
                            مشاركة
                        </button>

                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default AddPrayerDialog;
