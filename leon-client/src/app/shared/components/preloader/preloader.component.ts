import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'leon-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
