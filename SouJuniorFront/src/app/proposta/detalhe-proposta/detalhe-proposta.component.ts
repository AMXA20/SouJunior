import { SecurityService } from './../../security/security.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { postagemDTO, postagemCreationDTO } from './../../model/postagem.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { propostaCreationDTO, propostaDTO } from 'src/app/model/proposta.model';
import Swal from 'sweetalert2';

import { PropostaService } from '../proposta.service';

@Component({
  selector: 'app-detalhe-proposta',
  templateUrl: './detalhe-proposta.component.html',
  styleUrls: ['./detalhe-proposta.component.scss']
})
export class DetalhePropostaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private propostaService: PropostaService,
    private securityService: SecurityService,
    private router: Router, ) { }

  form: FormGroup;

  @Input()
  proposta: propostaDTO;

  dataCriacao: Date;
  propostaCreationDTO: propostaCreationDTO;
  postagemCreationDTO: postagemCreationDTO;
  usuarioNome: string;


  @Output()
  onSaveChanges: EventEmitter<propostaCreationDTO> = new EventEmitter<propostaCreationDTO>();

  @Output()
  onSaveChanges2: EventEmitter<postagemCreationDTO> = new EventEmitter<postagemCreationDTO>();


  ngOnInit(): void {

    this.form = this.formBuilder.group({
      propostaId: this.proposta.id,
      nomeUsuario: this.securityService.getFieldFromJWT('given_name'),
      mensagem: '',
    });

    this.usuarioNome = this.securityService.getFieldFromJWT('given_name');

    this.propostaCreationDTO ={
    titulo: this.proposta.titulo,
    descricao : this.proposta.descricao,
    dataCriacao: this.proposta.dataCriacao,
    isAceita: this.proposta.isAceita,
    empreendedorId: this.proposta.empreendedor.id,
    empresaJrId: this.proposta.empresaJr.id,
    estudanteId : this.proposta.estudante.id,
    perfilLinkedin: this.proposta.perfilLinkedin
    }
     console.log(this.proposta);
  }

  postar(){
    this.onSaveChanges2.emit(this.form.value);
  }

  aprovar(){
    Swal.fire({
      icon: 'success',
      title: 'Proposta Aprovada!',
      showConfirmButton: false,
      timer: 1500
    })
    this.propostaCreationDTO.isAceita = true;
    this.onSaveChanges.emit(this.propostaCreationDTO);
  }

  excluir(){
    Swal.fire({
      icon: 'error',
      title: 'Excluído com sucesso',
      showConfirmButton: false,
      timer: 1500
    })

    this.propostaService.delete(this.proposta.id)
    .subscribe(() => {
      this.router.navigate(["/listaProposta"]);
    });
  }

  reprovar(){
    Swal.fire({
      icon: 'error',
      title: 'Proposta Recusada!',
      showConfirmButton: false,
      timer: 1500
    })
    this.propostaCreationDTO.isAceita = false;
    this.onSaveChanges.emit(this.propostaCreationDTO);
  }
}


