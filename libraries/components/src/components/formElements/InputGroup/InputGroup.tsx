import { IInputGroup } from './IInputGroup';
import * as S from './InputGroup.styled';

export function InputGroup({
	slotLabel,
	slotInput,
	inputId,
	...restProps
}: IInputGroup): JSX.Element {
	return (
		<S.Wrapper htmlFor={inputId} {...restProps}>
			<S.Label>{slotLabel}</S.Label>
			{slotInput}
		</S.Wrapper>
	);
}
