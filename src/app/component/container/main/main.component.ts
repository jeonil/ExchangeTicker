import { Component, OnInit } from '@angular/core';
import { HuobiService } from '../../../service/exchange/huobi.service';
import { BithumbService } from '../../../service/exchange/bithumb.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private BithumbService: BithumbService,
    private HuobiService: HuobiService
  ) { }

  ngOnInit() {
  }

}
