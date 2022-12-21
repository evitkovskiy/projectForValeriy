import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export const onlyLatters = /^[а-яА-яa-zA-z ]*$/;

export const nameValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(onlyLatters)
]

export const surNameValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(onlyLatters)

];

export const ageValidators = [
    Validators.required,
    Validators.max(100),
    isNumber()
];

export const сitizenshipValidators = [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(onlyLatters)
]

export const genderValidators = [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(20),
    Validators.pattern(onlyLatters)
]

function isNumber(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        return (typeof +control.value === "number" && !isNaN(+control.value)) ? null : {isNumber: true}
    };
}