import { empresajrProposta } from './../../model/empresa-jr.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresajrService } from 'src/app/empresajr/empresajr.service';
import { empresajrDTO } from 'src/app/model/empresa-jr.model';
import { propostaCreationDTO } from 'src/app/model/proposta.model';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import Swal from 'sweetalert2';
import { PropostaService } from 'src/app/proposta/proposta.service';


@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styleUrls: ['./create-candidato.component.scss']
})
export class CreateCandidatoComponent implements OnInit {

  errors: string[] = [];

  constructor(private empresajrService: EmpresajrService,
    private propostaService : PropostaService,
    private activatedRoute : ActivatedRoute, private router: Router) { }

  model: empresajrProposta;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.empresajrService.getById(params.id).subscribe(empresajr => {
        this.model = empresajr;
      })
    });
  }

  saveChanges(propostaCreationDTO: propostaCreationDTO){
    console.log(propostaCreationDTO);
    Swal.fire({
      icon: 'success',
      title: 'Proposta Criada!',
      showConfirmButton: false,
      timer: 1500
    })
    this.propostaService.create(propostaCreationDTO).subscribe(() =>{
        this.router.navigate(['/listaCandidato']);
    }, error => this.errors = parseWebAPIErrors(error))

  }

}
