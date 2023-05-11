import { createContext } from 'react';

import type { GameContext } from './_GameContext.types';

const GameContext = createContext<GameContext | undefined>(undefined);

export default GameContext;
