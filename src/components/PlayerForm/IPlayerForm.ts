export interface IPlayerFormSubmitReturn {
    name: string,
}

export interface IPlayerFormProps {
    formID: string;
    onSubmit: (name: string) => void;
}
