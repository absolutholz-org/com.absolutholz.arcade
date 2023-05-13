import { createContext } from 'react';

import type { IGameConfigurationContext } from './_GameConfiguration.types';

const GameConfigurationContext = createContext<
	IGameConfigurationContext | undefined
>(undefined);

export default GameConfigurationContext;
