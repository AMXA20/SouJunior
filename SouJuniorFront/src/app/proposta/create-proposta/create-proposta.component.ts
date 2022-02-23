import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresajrService } from 'src/app/empresajr/empresajr.service';
import { empresajrDTO } from 'src/app/model/empresa-jr.model';
import { propostaCreationDTO } from 'src/app/model/proposta.model';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import Swal from 'sweetalert2';
import { PropostaService } from '../proposta.service';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.scss']
})
export class CreatePropostaComponent implements OnInit {

  errors: string[] = [];

  constructor(private empresajrService: EmpresajrService,
    private propostaService : PropostaService,
    private activatedRoute : ActivatedRoute, private router: Router) { }

  model: empresajrDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.empresajrService.getById(params.id).subscribe(empresajr => {
        this.model = empresajr;
      })
    });
  }

  saveChanges(propostaCreationDTO: propostaCreationDTO){
    Swal.fire({
      icon: 'success',
      title: 'Proposta Criada!',
      showConfirmButton: false,
      timer: 1500
    })
    this.propostaService.create(propostaCreationDTO).subscribe(() =>{
        this.router.navigate(['/listaProposta']);
    }, error => this.errors = parseWebAPIErrors(error))
    console.log(propostaCreationDTO)
  }
}
