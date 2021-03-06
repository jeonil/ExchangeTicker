import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderBookComponent } from './component/common/order-book/order-book.component';
import { MainComponent } from './component/container/main/main.component';
import { HuobiService } from './service/exchange/huobi.service';
import { BithumbService } from './service/exchange/bithumb.service';
import { HttpClientModule } from '@angular/common/http';
import { ValueDirective } from './directive/value.directive';
import { BitflyerService } from './service/exchange/bitflyer.sevice';


@NgModule({
  declarations: [
    AppComponent,
    OrderBookComponent,
    MainComponent,
    ValueDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
    ]),
    HttpClientModule
  ],
  providers: [
    HuobiService,
    BithumbService,
    BitflyerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
