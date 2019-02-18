import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from "@angular/forms"
import { RxwebValidators,RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from './user.model';


@Component({
    selector: 'app-errormessage-complete',
    templateUrl: './errorMessage-component.html'
})
export class ErrorMessagesComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: RxFormBuilder )
	{ }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
      
    }
}
