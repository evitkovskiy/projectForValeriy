import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'leon-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('message', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 0.8 })),
        animate('100ms 3000ms', style({ opacity: 0 })),
      ]),
      transition(':leave', [
        animate(1000, style({ opacity: 0 })),
      ]),
    ])
  ],
})
export class MessageComponent {

  showMessage = true;
  message = 'Default message';

  @Output() close = new EventEmitter();

}
