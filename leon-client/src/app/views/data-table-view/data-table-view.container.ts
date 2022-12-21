import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { takeUntil, delay, catchError } from 'rxjs/operators';
// Classes
import { Watcher } from '../../classes/watcher';
// Services
import { DataTableService } from '../../core/services/data-table.service';
import { PreloaderService, MessageService } from '../../shared/services';
// GLobal
import { ACTION_CONFIGURE, DEFAULT_PAGINATOR_PARAMETERS } from '../../global';
// Interfaces
import { IActionButtons, IActionPerson, IPaginatorParamters, IPerson, IRequestPersons } from '../../interfaces';
// Directives
import { RefDirective } from '../../shared/directives/ref.directive';
// Helpers
import { message} from '../../shared/functions/functions';
// Enums
import { ActionPersons, KeyMessage, PrefixMessage } from '../../entities/enums/entities.enum';


@Component({
  selector: 'leon-data-table-view',
  template: `
    <leon-data-table-view-component
        [actionsConfig]="actionsConfig"
        [requestData]="requestData$ | async"
        (actionPerson)="actionPerson($event)"
        (loadNewPage)="loadData($event)"
    >
    </leon-data-table-view-component>
    <ng-template refDirective></ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableViewContainer extends Watcher implements OnInit, OnDestroy {

  @ViewChild(RefDirective, {static: false}) refDir!: RefDirective;
  
  requestData$?: Observable<IRequestPersons>;  
  paginatorParameters: IPaginatorParamters = DEFAULT_PAGINATOR_PARAMETERS;
  actionsConfig: IActionButtons = ACTION_CONFIGURE;
  currentPaginatorParameter!: IPaginatorParamters;
  pipeConfig = [
    delay(400), 
    catchError(err => {
    this.actionPesonFailed(err.message)
    return throwError(err);
    }),
    takeUntil(this.unsubscribe)
  ]

  constructor(
    private dataTableService: DataTableService, 
    private cdRef: ChangeDetectorRef,
    private preloaderService: PreloaderService,
    private messageService: MessageService) {
    super();
  }

  ngOnInit(): void {    
    this.loadData(this.paginatorParameters);
  }

  actionPerson(actionPerson: IActionPerson): void {
    switch(actionPerson.action) {
      case ActionPersons.Deleted: 
      this.showPreloader();
        this.dataTableService.deletePerson(actionPerson.person)
          .pipe(
            delay(400),
            catchError(err => {
              this.actionPesonFailed(err.message)
              return throwError(err);
            }),
            takeUntil(this.unsubscribe))
          .subscribe((value: IPerson) => {
            if (value) {
              this.actionPersonSucces(
                this.currentPaginatorParameter, 
                message({
                  key: KeyMessage.Succes,
                  prefix: PrefixMessage.Deleted,
                  value: value.name
                })
              );
            };
          });
        break;
      case ActionPersons.Added:
        this.showPreloader();
        this.dataTableService.addPerson(actionPerson.person)
          .pipe(
            delay(400),
            catchError(err => {
              this.actionPesonFailed(err.message)
              return throwError(err);
            }),
            takeUntil(this.unsubscribe))
          .subscribe((value: IPerson) => {
            if (value) {
              this.actionPersonSucces(
                this.paginatorParameters, 
                message({
                  key: KeyMessage.Succes,
                  prefix: PrefixMessage.Added,
                  value: value.name
                })  
              );
            };
          });
        break;
      case ActionPersons.Saved:
        this.showPreloader();
        this.dataTableService.editPerson(actionPerson.person)
          .pipe(
            delay(400),
            catchError(err => {
              this.actionPesonFailed(err.message)
              return throwError(err);
            }),
            takeUntil(this.unsubscribe))
          .subscribe((value: IPerson) => {
            if (value) {
              this.actionPersonSucces(
                this.currentPaginatorParameter, 
                message({
                  key: KeyMessage.Succes,
                  prefix: PrefixMessage.Saved,
                  value: value.name
                }) 
              );
            };
          });
        break;
    }
  }

  loadData(paginatorParameters: IPaginatorParamters): void {
    this.currentPaginatorParameter = paginatorParameters;
    this.requestData$ = this.dataTableService.getPersons(paginatorParameters);
  }

  private actionPersonSucces(paginatorParamaters: IPaginatorParamters, message: string): void {
    this.loadData(paginatorParamaters);
    this.hidePreloader();
    this.cdRef.detectChanges();
    this.showMessage(message, KeyMessage.Succes);
  }

  private actionPesonFailed(message: string): void {
    // this.hidePreloader();
    // this.showMessage(message, KeyMessage.Error);
  }

  private showPreloader(): void {
    this.preloaderService.show(this.refDir);
  }

  private hidePreloader(): void {
    this.preloaderService.hide(this.refDir);
  }

  private showMessage(message: string, type: string): void {
    this.messageService.show(this.refDir, message, type);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
