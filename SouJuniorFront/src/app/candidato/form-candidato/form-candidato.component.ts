import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empresajrDTO, empresajrFilter, empresajrProposta } from 'src/app/model/empresa-jr.model';
import { propostaCreationDTO } from 'src/app/model/proposta.model';
import { SecurityService } from 'src/app/security/security.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-form-candidato',
  templateUrl: './form-candidato.component.html',
  styleUrls: ['./form-candidato.component.scss']
})
export class FormCandidatoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private securityService : SecurityService) { }

  form: FormGroup;

  proposta : propostaCreationDTO;

  @Input()
  empresajr :  empresajrProposta;

  @Output()
  onSaveChanges: EventEmitter<propostaCreationDTO> = new EventEmitter<propostaCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: 'Candidato',
      PerfilLinkedin: '',
      descricao: '',
      dataCriacao: new Date,
      empresaJrId: '',
      empreendedorId: '',
      estudanteId: '',
    });

    if (this.proposta !== undefined){
      this.form.patchValue(this.proposta);
      console.log(this.proposta);
    }

  }

  saveChanges(){
    this.form.get('empresaJrId').setValue(this.empresajr.id);
    if(this.securityService.user.empreendedor){
      this.form.get('empreendedorId').setValue(this.securityService.user.empreendedor.id);
      this.form.get('estudanteId').setValue("00000000-0000-0000-0000-000000000000");
    }
    else{
      this.form.get('estudanteId').setValue(this.securityService.user.estudante.id);
      this.form.get('empreendedorId').setValue("00000000-0000-0000-0000-000000000000");
    }
    this.onSaveChanges.emit(this.form.value);
  }


}
