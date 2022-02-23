import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empresajrDTO, empresajrFilter, empresajrProposta } from 'src/app/model/empresa-jr.model';
import { propostaCreationDTO } from 'src/app/model/proposta.model';
import { SecurityService } from 'src/app/security/security.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-form-proposta',
  templateUrl: './form-proposta.component.html',
  styleUrls: ['./form-proposta.component.scss']
})
export class FormPropostaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private securityService : SecurityService) { }

  form: FormGroup;

  proposta : propostaCreationDTO;

  @Input()
  empresajr :  empresajrProposta;

  @Output()
  onSaveChanges: EventEmitter<propostaCreationDTO> = new EventEmitter<propostaCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: '',
      descricao: '',
      dataCriacao: new Date,
      empresaJrId: '',
      empreendedorId: ''
    });

    if (this.proposta !== undefined){
      this.form.patchValue(this.proposta);
      console.log(this.proposta);
    }

  }

  saveChanges(){
    this.form.get('empresaJrId').setValue(this.empresajr.id);
    this.form.get('empreendedorId').setValue(this.securityService.user.empreendedor.id);
    /* this.form.get('empreendedorId').setValue("A57C744C-3EFF-4BA6-A3A4-F61879EC994C"); */
    this.onSaveChanges.emit(this.form.value);
  }


}
