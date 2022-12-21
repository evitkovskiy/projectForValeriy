import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'leon-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnChanges{

  @Input() countPage?: number;
  @Output() loadNewPage = new EventEmitter();

  size: number = 8;
  currentPage = 1;
  pages = [] as Array<number>;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) return;
    if (this.countPage) {
      this.pages = this.countPage > 1 ? (new Array(this.countPage )).fill(1).map((_,i)=>i+1) : [];
    }
  }
  

  pagination(page: number): void {
    this.currentPage = page;
    this.loadNewPage.emit({page, size: this.size});
 }

}
