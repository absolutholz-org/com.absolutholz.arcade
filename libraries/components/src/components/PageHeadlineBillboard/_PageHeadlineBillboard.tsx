import { PageHeadlineBillboardProps } from './_PageHeadlineBillboard.types';
import * as S from './_PageHeadlineBillboard.styled';

export function PageHeadlineBillboard({
	headlineText,
	backgroundImage,
}: PageHeadlineBillboardProps): JSX.Element {
	return (
		<S.PageHeadlineBillboard>
			<S.PageHeadlineBillboard_img
				role='presentation'
				srcSet={`
					https://arcade.absolutholz.de/img/bg/400/${backgroundImage} 400w,
					https://arcade.absolutholz.de/img/bg/600/${backgroundImage} 600w,
					https://arcade.absolutholz.de/img/bg/800/${backgroundImage} 800w,
					https://arcade.absolutholz.de/img/bg/1200/${backgroundImage} 1200w,
					https://arcade.absolutholz.de/img/bg/1600/${backgroundImage} 1600w,
				`}
				sizes='100vw'
			/>
			<S.PageHeadlineBillboard_PageGridContainer>
				<S.PageHeadlineBillboard_h1 as='h1' size='xxxxl'>
					{headlineText}
				</S.PageHeadlineBillboard_h1>
			</S.PageHeadlineBillboard_PageGridContainer>
		</S.PageHeadlineBillboard>
	);
}
