import { ChangeEvent } from 'react';

export type CurrencyType = 'RUB' | 'GEL' | 'USD';

export type HandleSetBasicCurrencyType = () => void;

export type HandleCurrencyChangeType = (event: ChangeEvent<HTMLSelectElement>) => void;

export type HandleCurrencyToConvertChangeType = (event: ChangeEvent<HTMLSelectElement>) => void;

export type HandleInputChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

export type HandleConvertType = (event: ChangeEvent<HTMLFormElement>) => void;