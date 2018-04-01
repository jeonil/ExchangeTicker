import { Component, OnInit } from '@angular/core';
import { HuobiService } from '../../../service/exchange/huobi.service';
import { BithumbService } from '../../../service/exchange/bithumb.service';
import { BitflyerService } from '../../../service/exchange/bitflyer.sevice';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private BithumbService: BithumbService,
    private HuobiService: HuobiService,
    private BitflyerService: BitflyerService
  ) { }

  ngOnInit() {
  }

}
