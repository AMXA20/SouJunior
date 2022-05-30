import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empresajrCreationDTO } from 'src/app/model/empresa-jr.model';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';

@Component({
  selector: 'app-form-create-empresajr',
  templateUrl: './form-create-empresajr.component.html',
  styleUrls: ['./form-create-empresajr.component.scss']
})
export class FormCreateEmpresajrComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/];
  mascaraCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  mascaraCnpj = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];

  @Input()
  usuario: usuarioCreatioDTO;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  @Output()
  onSaveChanges: EventEmitter<empresajrCreationDTO> = new EventEmitter<empresajrCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      email: '',
      senha: '',
      telefone: '',
      imagemPerfil: '',
      empresaJr: new FormGroup( {
        cnpj: new FormControl(''),
        descricao: new FormControl(''),
        dataCriacao: new FormControl(''),
        razaoSocial: new FormControl(''),
        nomeFantasia: new FormControl(''),
        ramoAtuacaoId: new FormControl(),
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
    console.log(image);
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
    console.log(this.usuario);
    this.form.get('empresaJr.ramoAtuacaoId').setValue(this.ramo.ramoSelecionado.id);
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

