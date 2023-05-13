import { InputGroupProps } from './InputGroup.annotations';
import * as S from './InputGroup.styled';

export function InputGroup({
	slotLabel,
	slotInput,
	inputId,
	required = false,
	helpText,
	...restProps
}: InputGroupProps): JSX.Element {
	return (
		<S.InputGroup htmlFor={inputId} {...restProps}>
			<S.InputGroupLabel>
				{slotLabel}
				{!required && <> (optional)</>}
			</S.InputGroupLabel>
			{slotInput}
			{helpText && <S.InputGroupHelpText>{helpText}</S.InputGroupHelpText>}
		</S.InputGroup>
	);
}
