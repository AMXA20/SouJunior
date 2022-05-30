import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { propostaCreationDTO, propostaDTO } from 'src/app/model/proposta.model';
import { PropostaService } from 'src/app/proposta/proposta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalhe-candidato',
  templateUrl: './detalhe-candidato.component.html',
  styleUrls: ['./detalhe-candidato.component.scss']
})
export class DetalheCandidatoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private propostaService: PropostaService,
    private router: Router, ) { }

  @Input()
  proposta: propostaDTO;

  dataCriacao: Date;
  propostaCreationDTO: propostaCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<propostaCreationDTO> = new EventEmitter<propostaCreationDTO>();


  ngOnInit(): void {
     this.propostaCreationDTO ={
      titulo: this.proposta.titulo,
      descricao : this.proposta.descricao,
      dataCriacao: this.proposta.dataCriacao,
      isAceita: this.proposta.isAceita,
      empreendedorId: this.proposta.empreendedor.id,
      empresaJrId: this.proposta.empresaJr.id,
      estudanteId : this.proposta.estudante.id,
      perfilLinkedin: 'https://www.linkedin.com/in/alexandre-mx-aquino/',
     }
     console.log(this.proposta);
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
      this.router.navigate(["/listaCandidato"]);
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
