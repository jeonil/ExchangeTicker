import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValue]'
})
export class ValueDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  ngOnChanges(chgs: SimpleChanges) {
    const { appValue } = chgs;
    if (appValue) {
      this.el.nativeElement.innerHTML = this.toValue(appValue.currentValue, this.decimal);
    }
  }

  @Input() appValue: number;
  @Input() decimal: number;

  private toValue = (n = 0, decimal = 0, coma = true, fillZero = true): string => {
    if (isNaN(n) === true) return 'N/A';
    if (typeof decimal === 'number') {
      n = this.cutDecimal(n, decimal);
    }

    const s = n.toString().split('.');
    const f = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (decimal === 0) return f;

    if (!s[1]) {
      s[1] = '';
    }

    if (fillZero === true && s[1].length < decimal) {
      const l = decimal - s[1].length;
      for (let i = 0; i < l; i++) {
        s[1] += '<span style="color: rgba(0, 0, 0, 0.25);">0</span>';
      }
    }

    return f + '.<small>' + s[1] + '</small>';
  }
  private cutDecimal = (n, p) => {
    const m = Math.pow(10, p), a = n * m, t = Math[a < 0 ? 'ceil' : 'floor'](a);
    return t / m;
  }
  private getDecimal = (n = 0) => ((n === null ? 0 : n).toString().split('.')[1] || '').length;
}
