import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ramoAtuacaoDTO } from 'src/app/model/ramoAtuacao.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';
import { empresajrCreationDTO } from '../../model/empresa-jr.model';
import { usuarioCreatioDTO, usuarioDTO } from '../../model/usuario.model';


@Component({
  selector: 'app-form-empresa-jr',
  templateUrl: './form-empresa-jr.component.html',
  styleUrls: ['./form-empresa-jr.component.scss']
})
export class FormEmpresaJrComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/];
  mascaraCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  mascaraCnpj = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];

  @Input()
  usuario: usuarioDTO;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  @Output()
  onSaveChanges: EventEmitter<empresajrCreationDTO> = new EventEmitter<empresajrCreationDTO>();



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
      empresaJr: new FormGroup( {
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
      this.usuario.empresaJr.dataCriacao = this.usuario.empresaJr.dataCriacao.substring(0,10);
      this.form.patchValue(this.usuario);
    }
    else{
      console.log(this.usuario);
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
    const field = this.form.get('nome');

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
