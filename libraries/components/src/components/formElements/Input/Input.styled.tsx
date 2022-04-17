import styled from 'styled-components';
import { SurfaceTheme, TypoSize } from '../../../enums';
import { themeSurface } from '../../../styles/themeSurface';

export const Input = styled.input`
	${themeSurface({ theme: SurfaceTheme.Background2 })}
	border: 2px solid;
	border-radius: 3px;
	font-size: ${TypoSize.x1125};
	padding: 0.25rem 0.5rem;
`;
