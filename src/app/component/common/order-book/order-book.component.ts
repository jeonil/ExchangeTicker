import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { IMarket, IOrderBook, IOrderBookItem, IMarketDecimal } from '../../../interface/exchange.interface';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBookComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(chgs: SimpleChanges) {
    const { orderbook } = chgs;
    if (orderbook) {
      const { asks, bids } = orderbook.currentValue;
      this.asks = asks.slice(0, this.limit).reverse();
      this.bids = bids.slice(0, this.limit);
    }
  }

  highlight = {
    asks: {},
    bids: {}
  };

  asks: IOrderBookItem[];
  bids: IOrderBookItem[];

  get maxTotal() {
    return Math.max(this.asks[0].total, this.bids[this.bids.length - 1].total);
  }

  trackByFunc(index, item: IOrderBookItem) {
    return `${item.price}`;
  }

  @Input() orderbook: IOrderBook;
  @Input() decimal: IMarketDecimal;
  @Input() limit = 10;
}
