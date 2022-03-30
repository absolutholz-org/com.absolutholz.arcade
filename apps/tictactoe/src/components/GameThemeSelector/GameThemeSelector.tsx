import { ChangeEvent, useState } from "react";

import SvgChange from "mdi-react/PencilIcon";

import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
	IconSize,
} from "@arcade/library-components";

import * as S from "./GameThemeSelector.styled";
import { useGameConfiguration } from "../../context/GameConfiguration";
import {
	GameConfigurationAction,
	GameTheme,
	TicTacToePiece,
} from "../../enums";
import { GamePieceIcon } from "../GamePieceIcon";

export function GameThemeSelector(): JSX.Element {
	const { gameTheme, dispatch } = useGameConfiguration();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [theme, setTheme] = useState(gameTheme);

	const handleDialogConfirm = () => {
		dispatch({
			type: GameConfigurationAction.SetTheme,
			payload: { theme },
		});
		setIsDialogOpen(false);
	};

	return (
		<div>
			<S.ThemeName>
				<span>{gameTheme}</span>
				<ButtonIcon
					inline={true}
					onClick={() => setIsDialogOpen(true)}
					variant={ButtonVariant.Ghost}
				>
					<Icon icon={SvgChange} />
				</ButtonIcon>
			</S.ThemeName>

			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}
			>
				<S.ThemeGrid>
					{Object.keys(GameTheme).map((gameThemeID) => (
						<S.GameTheme
							as="label"
							htmlFor={`gameTheme-${gameThemeID}`}
							key={`gameTheme-${gameThemeID}`}
						>
							{/* {gameTheme === gameThemeID && <S.Flag>selected</S.Flag>} */}

							<input
								checked={theme === gameThemeID}
								id={`gameTheme-${gameThemeID}`}
								name="gameTheme"
								onChange={() =>
									setTheme(gameThemeID as GameTheme)
								}
								type="radio"
								value={gameThemeID}
							/>

							<S.Title>{gameThemeID}</S.Title>

							<S.IconWrapper>
								<GamePieceIcon
									iconSize={IconSize.x400}
									piece={TicTacToePiece.X}
									theme={gameThemeID as GameTheme}
								/>
								<GamePieceIcon
									iconSize={IconSize.x400}
									piece={TicTacToePiece.O}
									theme={gameThemeID as GameTheme}
								/>
							</S.IconWrapper>
						</S.GameTheme>
					))}
				</S.ThemeGrid>
			</DialogConfirm>
		</div>
	);
}
