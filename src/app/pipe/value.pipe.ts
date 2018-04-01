import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(v: any, a: number): string {
    return this.toValue(v, a);
  }

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
        s[1] += '0';
      }
    }

    return f + '.' + s[1];
  }
  private cutDecimal = (n, p) => {
    const m = Math.pow(10, p), a = n * m, t = Math[a < 0 ? 'ceil' : 'floor'](a);
    return t / m;
  }

  private getDecimal = (n = 0) => ((n === null ? 0 : n).toString().split('.')[1] || '').length;
}
