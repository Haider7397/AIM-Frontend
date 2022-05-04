import { FormControl } from '@angular/forms';
import { Component} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-validators',
    template: ``
})

export class DateValidators{
    dateGreaterThanToday(control: FormControl): { [s: string]: boolean } {
        if (control.value) {
          const date = moment(control.value);
          const today = moment();
          if (date.isBefore(today)) {
            return { 'invalidDate': true }
          }
        }
        return null;
      }

      dateSmallerThanToday(control: FormControl): { [s: string]: boolean } {
        if (control.value) {
          const date = moment(control.value);
          const today = moment();
          if (date.isAfter(today)) {
            return { 'invalidDate': true }
          }
        }
        return null;
      }
}