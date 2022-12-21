import { AbstractControl, ValidationErrors } from '@angular/forms';

import {
  nameValidators,
  surNameValidators,
  ageValidators,
  сitizenshipValidators,
  genderValidators
} from '../../shared/validators/data-validators';

export class dataTableForm {
  id: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  surname: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  age: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  сitizenship: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  gender: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  isEditable: (boolean | ((control: AbstractControl) => ValidationErrors)[])[];


  constructor() {
    this.id = [''];
    this.name = ['', nameValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.surname = ['', surNameValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.age = ['', ageValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.сitizenship = ['', сitizenshipValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.gender = ['', genderValidators as ((control: AbstractControl) => ValidationErrors)[]];
    this.isEditable = [true];
  }
}
