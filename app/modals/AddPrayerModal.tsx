import { useState } from 'react';
import { X } from "lucide-react";
import { Tajawal } from "next/font/google";
import classNames from "classnames";

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

    const [prayer, setPrayer] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = () => {

    }

    const onPrayerChange = (prayer: string) => {
        setPrayer(prayer)
        setError('')

        if(!/^[؀-ۿ., ]*$/.test(prayer))
            setError('يجب أن يكون الدعاء باللغة العربية فقط')

        if (prayer.length > 2000) {
            setError('لا يمكن أن يتجاوز الدعاء 2000 حرف')
        }
    }


    return (
        <div className='text-primary'>
            <dialog className="modal" ref={dialogRef}>
                <div className="modal-box">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2"
                        onClick={closeDialog}
                    >
                        <X />
                    </button>
                    <div className='rtl text-end flex flex-col space-y-2'>
                        <h3 className="font-bold text-lg">  شاركنا دعاءك وأكسب الأجر</h3>
                        <div className='form-control'>
                            <textarea
                                placeholder="سبحان الله و بحمده، سبحان الله العظيم"
                                rows={10}
                                className={classNames('w-full text-end textarea textarea-bordered mt-4 rtl resize-none', tajawal.className, {
                                    'textarea-error': error
                                })}
                                onChange={(e) => onPrayerChange(e.target.value)}
                                ></textarea>
                            <label className='label'>
                                <span className={classNames('label-text-alt text-rose-500', tajawal.className)}>{error}</span>
                                <span className="label-text-alt">{prayer.length}/2000</span>
                            </label>
                        </div>

                        <button className={classNames('bg-primary text-white w-24 h-8  rounded-lg  font-serif pt-1 duration-300 border border-transparent hover:text-primary hover:bg-white hover:border-primary', tajawal.className,)} onClick={closeDialog}>
                            مشاركة
                        </button>

                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default AddPrayerDialog;
