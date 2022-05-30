import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioCreatioDTO, usuarioDTO } from 'src/app/model/usuario.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';

import { empreendedorCreationDTO } from '../../model/empreendedor.model';

@Component({
  selector: 'app-form-microempresa',
  templateUrl: './form-microempresa.component.html',
  styleUrls: ['./form-microempresa.component.scss']
})
export class FormMicroempresaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/];
  mascaraCnpj = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];
  mascaraCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  @Input()
  usuario: usuarioDTO;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  @Output()
  onSaveChanges: EventEmitter<usuarioDTO> = new EventEmitter<usuarioDTO>();



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
      empreendedor: new FormGroup( {
        id: new FormControl(''),
        cnpj: new FormControl(''),
        descricao: new FormControl(''),
        dataCriacao: new FormControl(''),
        razaoSocial: new FormControl(''),
        nomeFantasia: new FormControl(''),
        ramoAtuacaoId: new FormControl(),
      }),
      endereco: new FormGroup( {
        id: new FormControl(''),
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
      this.usuario.empreendedor.dataCriacao = this.usuario.empreendedor.dataCriacao.substring(0,10);
      this.form.patchValue(this.usuario);
      console.log(this.usuario);
    }
    else{
      console.log(this.usuario);
    }

  }

  onImageSelected(image){
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
    console.log(this.form.value);
    this.form.get('empreendedor.ramoAtuacaoId').setValue(this.ramo.ramoSelecionado.id);

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
