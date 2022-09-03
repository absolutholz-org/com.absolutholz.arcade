export type GameSize = '3x3' | '4x4' | '5x5';

export type GameTheme = 'HugsKisses' | 'CatsDogs' | 'SunMoon' | 'HamburgerHotDog';

export type GameConfigurationAction = 'SetTheme' | 'SetSize';

export const STORAGE_KEY_THEME = 'absolutholz.arcade.tictactoe:theme';

export const STORAGE_KEY_SIZE = 'absolutholz.arcade.tictactoe:size';
