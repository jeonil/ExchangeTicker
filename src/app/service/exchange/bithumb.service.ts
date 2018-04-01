import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { IExchange, IMarketParameter } from '../../interface/exchange.interface';
import { BithumbConfig } from './bithumb.config';

@Injectable()
export class BithumbService implements IExchange {
    constructor(private http: HttpClient) {
        for (const i in this.config.market) {
            const market = this.config.market[i];
            this.market[`${market.parameter.counter}_${market.parameter.base}`] = {
                orderbook: {
                    asks: [],
                    bids: []
                },
                decimal: market.decimal,
                parameter: market.parameter
            };
            this.marketTread(market.parameter);
        }
    }
    public config = BithumbConfig;
    public name = 'bithumb';
    public working = false;
    public market = {};
    public user = {
        asset: {},
        fee: { maker: 0.2, taker: 0.2 },
    };
    public marketTread(market: IMarketParameter) {
        const { counter, base } = market;
        this.http.get<any>(`https://api.bithumb.com/public/orderbook/${this.config.currency[counter]}`)
            .subscribe(
                data => {
                    if (data.status !== '0000') { this.working = false; return; }

                    const storage = this.market[`${counter}_${base}`];

                    let aTotal = 0, bTotal = 0;

                    storage.orderbook = {
                        asks: data.data.asks.map((item) => ({
                            price: Number(item.price),
                            quantity: Number(item.quantity),
                            total: aTotal += Number(item.quantity)
                        })),
                        bids: data.data.bids.map((item) => ({
                            price: Number(item.price),
                            quantity: Number(item.quantity),
                            total: bTotal += Number(item.quantity)
                        }))
                    };

                    this.marketUpdate.next(market);
                    setTimeout(() => this.marketTread(market), 1000);
                },
                () => {
                    this.working = false;
                    setTimeout(() => this.marketTread(market), 1000);
                }
            );
    }
    public marketUpdate: Subject<IMarketParameter> = new Subject();
}
