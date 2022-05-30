import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-estudante.component.html',
  styleUrls: ['./form-estudante.component.scss']
})
export class FormAlunoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/];
  mascaraCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  mascaraCpf = [/[0-9]/, /\d/,  /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/, /\d/];

  form: FormGroup;
  periodo: { key: number; value: string;}[]
  periodos:[
    {value: 1, viewValue: 'Manhã'},
    {value: 2, viewValue: 'Tarde'},
    {value: 3, viewValue: 'Noite'},
    {value: 4, viewValue: 'Integral'},
  ];

  @Input()
  usuario: usuarioCreatioDTO;

  @Output()
  onSaveChanges: EventEmitter<usuarioCreatioDTO> = new EventEmitter<usuarioCreatioDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      email: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      senha: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      telefone: '',
      imagemPerfil: '',
      estudante: new FormGroup( {
        cpf: new FormControl(''),
        instituicao: new FormControl(''),
        curso: new FormControl(''),
        periodo: new FormControl()
      }),
      endereco: new FormGroup( {
        cep: new FormControl(''),
        estado: new FormControl(''),
        bairro: new FormControl(''),
        cidade: new FormControl(''),
        complemento: new FormControl(''),
        logradouro: new FormControl(''),
        numero: new FormControl('')
      }),
    });

    if (this.usuario !== undefined){
      this.form.patchValue(this.usuario);
    }


  }

  onImageSelected(image){
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if (field.hasError('required')){
      return 'The name field is required';
    }

    if (field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    if (field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
