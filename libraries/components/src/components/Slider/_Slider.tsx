import { type ChangeEvent, useState } from "react";

import type { SliderProps } from "./_Slider.annotations";
import * as S from './_Slider.styled';

export function Slider ({ max, min = 0, step = 1, onChange }: SliderProps): JSX.Element {
    const [ value, setValue ] = useState<number>(min);

    function handleChange (event: ChangeEvent<HTMLInputElement>): void {
        const value = parseInt(event.currentTarget.value);
        setValue(value);
        onChange(value);
    }
    
    return (
        <S.Slider max={ max } min={ min } onChange={handleChange} step={ step } type='range' value={value} />
    );
}
