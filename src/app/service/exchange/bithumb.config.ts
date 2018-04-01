import { IExchangeConfig } from '../../interface/exchange.interface';

export const BithumbConfig: IExchangeConfig = {
    market: [
        { parameter: { counter: 'btc', base: 'krw' }, decimal: {counter: 4, base: 0} }
    ],
    currency: {
        btc: 'BTC',
        krw: 'KRW'
    }
};
