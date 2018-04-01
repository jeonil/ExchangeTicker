import { IExchangeConfig } from '../../interface/exchange.interface';

export const BitflyerConfig: IExchangeConfig = {
    market: [
        { parameter: { counter: 'btc', base: 'jpy' }, decimal: {counter: 4, base: 2} }
    ],
    currency: {
        btc: 'BTC',
        jpy: 'JPY'
    }
};
