import { IInputGroup } from './IInputGroup';
import * as S from './InputGroup.styled';

export function InputGroup({
	slotLabel,
	slotInput,
	inputId,
	required = false,
	helpText,
	...restProps
}: IInputGroup): JSX.Element {
	return (
		<S.Wrapper htmlFor={inputId} {...restProps}>
			<S.Label>
				{slotLabel}
				{!required && <> (optional)</>}
			</S.Label>
			{slotInput}
			{helpText && <S.HelpText>{helpText}</S.HelpText>}
		</S.Wrapper>
	);
}
