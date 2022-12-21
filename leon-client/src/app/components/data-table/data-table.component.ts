import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';


import { distinctUntilChanged, map, take, takeUntil} from 'rxjs/operators';
// Classes
import { Watcher } from './../../classes/watcher';
// Forms
import { dataTableForm } from './../../entities/forms/data-table.form';
// Global
import { ACTION_CONFIGURE, VIEW_FORM_CONTROLS, TABLE_HEADERS } from '../../global';
//Directives
import { RefDirective } from 'src/app/shared/directives/ref.directive';
// Helper Functions
import { trackItem } from '../../shared/functions/functions';
// Services
import { DialogModalService } from '../../shared/services/dialog-modal.service';
// Interfaces
import { IActionButton, IPerson } from '../../interfaces';

@Component({
  selector: 'leon-data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent extends Watcher implements OnChanges, OnDestroy {

  @ViewChild(RefDirective, {static: false}) refDir!: RefDirective;

  trackItem = trackItem;

  @Input() persons!: IPerson[];
  @Output() actionPerson = new EventEmitter();

  viewFormControls = VIEW_FORM_CONTROLS;
  actionsConfig = ACTION_CONFIGURE;
  headers = TABLE_HEADERS;
  dataTableForm!: FormGroup;
  changingObject!: IPerson;
  isTheSameObject = true;
  // isTheSameObject$ = new BehaviorSubject(true);
  // sameObject$ = this.isTheSameObject$.asObservable();
  isSavedPerson = false;

  constructor(
    private fb: FormBuilder, 
    private dialogModalService: DialogModalService) {
      super();
      this.dataTableForm = this.fb.group({
        rows: this.fb.array([])
      })
  }
  
  get formArray() {
    return this.dataTableForm.controls.rows as FormArray
  }

  get rowsControls() {
    return this.formArray.controls as any; // Write interface
  }

  ngOnChanges(changes: SimpleChanges): void {
     if (!changes) return;
     if (this.persons) {
      this.dataTableForm = this.fb.group({
        rows: this.fb.array(this.initRows())
      });
     }
  }

  initRows(): FormGroup[] {
    const group: Array<FormGroup> = [];
    this.persons.forEach((item: IPerson) => {
      let fbGroup = this.fb.group(new dataTableForm);
      fbGroup.patchValue({
        ...item,
        isEditable: true
      });
      group.push(fbGroup);
    });
    return group
  }

  action(actionConfig: IActionButton, index: number, formValue?: IPerson): void {
      switch(actionConfig.action) {
        case 'AddRow': 
        if (formValue) {
          this.addRow(formValue);
        };
          break;
        case 'EditRow': 
        this.editRow(index);
          break;
        case 'DeleteRow': 
        this.deleteRow(index);
          break;
        case 'SaveRow':
          this.saveRow(index);
          break;
        case 'CancelRow':
          this.cancelRow(index);
          break;
      }
  }

  showModal(actionConfig: IActionButton, index: number) {
    this.dialogModalService.showModal(this.refDir, actionConfig);
    this.dialogModalService.modalAfterClosed
      .pipe(take(1), takeUntil(this.unsubscribe))
      .subscribe((value: any) => { // Write Interface
        value.dialogStatus && actionConfig.action === 'AddRow' ? 
        this.action(actionConfig, index, value.modalFormValue) :
        value.dialogStatus ? this.action(actionConfig, index) : null
    });  
  }

  private addRow(person: IPerson): void {
    this.actionPerson.emit({action: 'addPerson', person});

  }

  private saveRow(index: number): void {
    this.actionPerson.emit({action: 'savePerson', person : this.formArray.at(index).value});
    this.isSavedPerson = true;
  }

  private editRow(index: number): void {
    this.markAsEditableForm();
    this.formArray.at(index).patchValue({isEditable: false});
    this.isSameFormValue(index);
  }

  private cancelRow(index: number): void {
    this.formArray.at(index).patchValue({
      ...this.changingObject,
      isEditable: true
    });
    this.changingObject = {} as IPerson;
    this.isTheSameObject = true;
    this.isSavedPerson = false;
  }

  private deleteRow(index: number): void {
    this.actionPerson.emit({action: 'deletePerson', person : this.formArray.at(index).value});
  }

  private markAsEditableForm(): void {
    this.rowsControls.forEach((formGroup: FormGroup) => {
      formGroup.getRawValue().id === this.changingObject?.id && !this.isSavedPerson ? 
        formGroup.patchValue({
          ...this.changingObject,
          isEditable: true
        }) : 
        formGroup.patchValue({isEditable: true});
     });
  }

  private isSameFormValue(index: number): void {
    this.changingObject = _.clone(this.formArray.at(index).value);
    this.isTheSameObject = true;
    this.isSavedPerson = false;
    this.formArray.at(index).valueChanges
    .pipe(takeUntil(this.unsubscribe))
    .subscribe((value: IPerson) => {
      /* If lodash depricated, use the code below */
      // this.isTheSameObject = JSON.stringify(this.changingObject) === JSON.stringify(value);
      this.isTheSameObject = _.isEqual(this.changingObject, value)
    });
    
    // Usin async pipe without subscribe
    // this.sameObject$ = this.formArray.at(index).valueChanges
    //   .pipe(
    //     distinctUntilChanged(),
    //     map(value =>  _.isEqual(this.changingObject, value))
    // )
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
