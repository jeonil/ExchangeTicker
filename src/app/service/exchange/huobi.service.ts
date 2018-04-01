import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { IExchange, IMarketParameter } from '../../interface/exchange.interface';
import { HuobiConfig } from './huobi.config';

@Injectable()
export class HuobiService implements IExchange {
    constructor(private http: HttpClient) {
        for (const i in this.config.market) {
            const market = this.config.market[i];
            this.market[`${market.parameter.counter}_${market.parameter.base}`] = {
                orderbook: { asks: [], bids: [] },
                decimal: market.decimal,
                parameter: market.parameter
            };
            this.marketTread(market.parameter);
        }
    }
    public config = HuobiConfig;
    public name = 'huobi';
    public working = false;
    public market = {};
    public user = {
        asset: {},
        fee: { maker: 0.2, taker: 0.2 },
    };
    public marketTread(market: IMarketParameter) {
        const { counter, base } = market;
        const symbol = `${this.config.currency[counter]}${this.config.currency[base]}`;
        this.http.get<any>('https://api.huobi.pro/market/depth?type=step1', { params: new HttpParams().set('symbol', symbol) })
            .subscribe(
                data => {
                    if (data.status !== 'ok') { this.working = false; return; }

                    const storage = this.market[`${counter}_${base}`];

                    let aTotal = 0, bTotal = 0;
                    storage.orderbook = {
                        asks: data.tick.asks.map(item => ({
                            price: item[0],
                            quantity: item[1],
                            total: aTotal += item[1]
                        })),
                        bids: data.tick.bids.map(item => ({
                            price: item[0],
                            quantity: item[1],
                            total: bTotal += item[1]
                        }))
                    };

                    this.marketUpdate.next(market);
                    setTimeout(() => this.marketTread(market), 1000);
                },
                () => this.working = false
            );
    }
    public marketUpdate: Subject<IMarketParameter> = new Subject();
}
