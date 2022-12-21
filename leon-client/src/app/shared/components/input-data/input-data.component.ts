import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'leon-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDataComponent{

  @Input() control!: FormControl;
  @Input() readonly!: boolean;
  @Input() class!: string;
  @Input() classControl!: string;
  @Input() placeholder!: string;
  @Input() label!: string;

  getErrors(): string {
    return this.control.hasError('required')
      ? 'Field has been required'
      : this.control.hasError('minlength')
      ? `Minimum symbol ${this.control.getError('minlength').requiredLength}`
      : this.control.hasError('maxlength')
      ? `Maximum symbol ${this.control.getError('maxlength').requiredLength}`
      : this.control.hasError('isNumber')
      ? 'Only enter numbers'
      : this.control.hasError('pattern')
      ? 'Only enter letters'
      : this.control.hasError('max')
      ? `Maximum value ${this.control.getError('max').max}`
      : '';
  }

}
