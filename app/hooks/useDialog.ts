'use client'
import { useRef } from 'react';

interface UseDialogReturn {
    openDialog: () => void;
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement>;
}

const useDialog = (): UseDialogReturn => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return {
        openDialog,
        closeDialog,
        dialogRef,
    };
};

export default useDialog;
