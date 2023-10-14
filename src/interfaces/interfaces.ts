import {
    HandleSetBasicCurrencyType,
    HandleCurrencyChangeType,
    CurrencyType,
    HandleCurrencyToConvertChangeType,
    HandleInputChangeType,
    HandleConvertType
} from "../types/types";

export interface Rates {
    RUB?:number;
    USD?:number;
    GEL?:number;
}

export interface ApiOptions {
    url: string;
    apiKey: string;
}

export interface ApiResponse {
    rates?: {
        [key: string]: number;
    }
}

export interface RateProps {
    rates: Rates;
    usd: number | null,
    gel: number | null,
    rub: number | null,
    handleSetBasicCurrency: HandleSetBasicCurrencyType,
    handleCurrencyChange: HandleCurrencyChangeType
}

export interface ConverterProps {
    currencyToConvert: CurrencyType | '',
    convertedValue: number | null,
    handleCurrencyToConvertChange: HandleCurrencyToConvertChangeType,
    handleInputChange: HandleInputChangeType,
    handleConvert: HandleConvertType,
    value: string,
    currency: CurrencyType | ''
}