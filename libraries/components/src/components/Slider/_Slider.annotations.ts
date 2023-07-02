export type SliderProps = { 
    max: number;
    min?: number;
    step?: number;
    onChange: (value: number) => void;
};
