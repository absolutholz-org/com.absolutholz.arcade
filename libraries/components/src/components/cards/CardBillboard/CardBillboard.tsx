import {
	ICardBillboardBackgroundImageProps,
	ICardBillboardHeadlineProps,
	ICardBillboardProps,
} from './ICardBillboard';
import * as S from './CardBillboard.styled';

export function CardBillboard({
	children,
	slotBackground,
	...props
}: ICardBillboardProps): JSX.Element {
	return (
		<S.CardBillboard {...props}>
			{slotBackground}
			<S.CardBillboardChildren>{children}</S.CardBillboardChildren>
		</S.CardBillboard>
	);
}

export function CardBillboardBackgroundImage({
	imgUri,
}: ICardBillboardBackgroundImageProps): JSX.Element {
	const srcset = [
		`${imgUri.replace('/original/', '/400/')} 400w`,
		`${imgUri.replace('/original/', '/600/')} 600w`,
		`${imgUri.replace('/original/', '/800/')} 800w`,
	].join(',');

	return (
		<S.CardBillboardBackground
			alt=' '
			decoding='async'
			loading='lazy'
			role='presentation'
			srcSet={srcset}
			sizes='(max-width: 1600px) 369px, (max-width: 1324px) 25vw, (max-width: 1004px) 33vw, (max-width: 664px) 50vw, 100vw'
		/>
	);
}

export function CardBillboardHeadline({
	children,
	tag = 'h3',
	...props
}: ICardBillboardHeadlineProps): JSX.Element {
	return (
		<S.CardBillboardHeadline as={tag} {...props}>
			{children}
		</S.CardBillboardHeadline>
	);
}
