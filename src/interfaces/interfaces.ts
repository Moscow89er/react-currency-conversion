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