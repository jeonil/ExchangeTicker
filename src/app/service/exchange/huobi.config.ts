import { IExchangeConfig } from '../../interface/exchange.interface';

export const HuobiConfig: IExchangeConfig = {
    market: [
        { parameter: { counter: 'btc', base: 'usdt' }, decimal: { counter: 4, base: 4 } }
    ],
    currency: {
        btc: 'btc',
        krw: 'krw',
        usdt: 'usdt'
    }
};
