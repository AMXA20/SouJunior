import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userCredentials } from '../security.model';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})
export class AuthenticationFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder){}

  form: FormGroup;

  @Input()
  errors: string[] = [];

  @Input()
  action: string = 'Register';

  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required, Validators.email]
      }],
      senha: ['', {
        validators: [Validators.required]
      }]
    });
  }

  getEmailErrorMessage(){
    var field = this.form.get('email');
    if (field.hasError('required')){
      return "Preencha o e-mail";
    }

    if (field.hasError('email')){
      return "email inválido";
    }

    return '';
  }

}
