import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { propostaCreationDTO, propostaDTO } from 'src/app/model/proposta.model';
import { PropostaService } from 'src/app/proposta/proposta.service';

@Component({
  selector: 'app-edit-candidato',
  templateUrl: './edit-candidato.component.html',
  styleUrls: ['./edit-candidato.component.scss']
})
export class EditCandidatoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private propostaService: PropostaService,
    private router: Router) { }

  proposta: propostaDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.propostaService.getById(params.id).subscribe
      (proposta => this.proposta = proposta
      );
    });
  }

  saveChanges(propostaCreationDTO: propostaCreationDTO){
    console.log(propostaCreationDTO);
    this.propostaService.edit(this.proposta.id, propostaCreationDTO)
    .subscribe(() => {
      this.router.navigate(["/listaCandidato"])
    });
  }
}
