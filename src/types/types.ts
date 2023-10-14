import { ChangeEvent } from 'react';

export type CurrencyType = 'RUB' | 'GEL' | 'USD';

export type HandleSetBasicCurrencyType = () => void;

export type HandleCurrencyChangeType = (event: ChangeEvent<HTMLSelectElement>) => void;