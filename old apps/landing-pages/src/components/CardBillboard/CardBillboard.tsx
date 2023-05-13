import type {
	CardBillboardBackgroundImageProps,
	CardBillboardHeadlineProps,
	CardBillboardProps,
} from './CardBillboard.annotations';
import * as S from './CardBillboard.styled';

export function CardBillboard({ children, slotBackground, ...props }: CardBillboardProps): JSX.Element {
	return (
		<S.CardBillboard {...props}>
			{slotBackground}
			<S.CardBillboardChildren>{children}</S.CardBillboardChildren>
		</S.CardBillboard>
	);
}

export function CardBillboardBackgroundImage({ imgUri }: CardBillboardBackgroundImageProps): JSX.Element {
	const srcset = [
		`${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', '/400/')} 400w`,
		`${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', '/600/')} 600w`,
		`${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', '/800/')} 800w`,
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

export function CardBillboardHeadline({ children, tag = 'h3', ...props }: CardBillboardHeadlineProps): JSX.Element {
	return (
		<S.CardBillboardHeadline as={tag} {...props}>
			{children}
		</S.CardBillboardHeadline>
	);
}
