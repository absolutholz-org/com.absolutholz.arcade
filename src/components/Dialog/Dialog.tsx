import { useEffect, useRef } from 'react';

import * as S from './Dialog.styled';
import { IDialogProps } from './IDialog';

export function Dialog ({ 
    children, 
    isOpen = false, 
    isModal = true, 
    slotFooter, 
}: IDialogProps): JSX.Element {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!ref?.current) {
            return;
        }

        if (isOpen) {
            if (isModal) {
                // @ts-ignore
                ref.current.showModal();
            } else {
                // @ts-ignore
                ref.current.open();
            }
        } else {
            // @ts-ignore
            ref.current.close();
        }
    }, [ isOpen ])

    return (
        <S.Dialog ref={ ref }>
            { children }
            { slotFooter && 
                <S.Footer>{ slotFooter }</S.Footer>
            }
        </S.Dialog>
    )
}
