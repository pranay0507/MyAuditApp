import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[alphabetValidator]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: Alphabetvalidatordirective,
      multi: true
    }]
  })

export class Alphabetvalidatordirective implements Validator{
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const alphabetPattern = /^[a-zA-Z]+$/;

        if(control.value && !alphabetPattern.test(control.value)){
            return{alphabet: true};
        }
        return null;
    }
}
