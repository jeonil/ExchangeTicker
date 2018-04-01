import { Subject } from 'rxjs/Subject';

export interface IExchange {
    name: string;
    working: boolean;
    config: IExchangeConfig;
    market: {
        [marketName: string]: IMarket
    };
    user: {
        asset: {
            [marketName: string]: {
                available: number;
                reserve: number;
                total: number;
                loan?: number;
            };
        };
        fee: {
            taker: number;
            maker: number;
        };
    };
    // config.market -> config.currency -> market
    marketTread(p: any): void;
    marketUpdate: Subject<IMarketParameter>;
}

export interface IExchangeConfig {
    market: Array<{
        parameter: IMarketParameter,
        decimal: IMarketDecimal
    }>;
    currency: { [name: string]: string; };
}

export interface IMarketParameter {
    base: string;
    counter: string;
}

export interface IMarketDecimal {
    base: number;
    counter: number;
}

export interface IOrderBook {
    asks: IOrderBookItem[];
    bids: IOrderBookItem[];
}

export interface IOrderBookItem {
    price: number;
    quantity: number;
    total: number;
}

export interface IMarket {
    parameter: IMarketParameter;
    orderbook: IOrderBook;
    decimal: IMarketDecimal;
}
