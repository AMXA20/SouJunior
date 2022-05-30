import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';

@Component({
  selector: 'app-form-create-microempresa',
  templateUrl: './form-create-microempresa.component.html',
  styleUrls: ['./form-create-microempresa.component.scss']
})
export class FormCreateMicroempresaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  mascaraTelefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/, /\d/];
  mascaraCnpj = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];
  mascaraCep = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  @Input()
  usuario: usuarioCreatioDTO;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  @Output()
  onSaveChanges: EventEmitter<usuarioCreatioDTO> = new EventEmitter<usuarioCreatioDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', {
        validators: [Validators.required, Validators.minLength(3)]
      }],
      email: '',
      senha: '',
      telefone: '',
      imagemPerfil: '',
      empreendedor: new FormGroup( {
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

      /* console.log(this.usuario.empreendedor); */
    }
    console.log(this.ramo);

  }

  onImageSelected(image){
    this.form.get('imagemPerfil').setValue(image);
  }

  saveChanges(){
    this.form.get('empreendedor.ramoAtuacaoId').setValue(this.ramo.ramoSelecionado.id);
    console.log(this.form.value);
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
