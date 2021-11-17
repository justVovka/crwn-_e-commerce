import { createContext } from 'react';

import SHOP_DATA from './shop.data';

// initial value of context
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
