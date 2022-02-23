import { Component, OnInit } from '@angular/core';
import { usuarioCreatioDTO } from '../../model/usuario.model';
import { EstudanteService } from '../estudante.service';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.scss']
})
export class CreateAlunoComponent implements OnInit {

  errors: string[] = []

  constructor(private estudanteService: EstudanteService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(usuarioCreatioDTO : usuarioCreatioDTO, ){
    usuarioCreatioDTO.estudante.periodo = +usuarioCreatioDTO.estudante.periodo;
    usuarioCreatioDTO.estudante.cpf = ""+usuarioCreatioDTO.estudante.cpf;
    usuarioCreatioDTO.telefone = ""+usuarioCreatioDTO.telefone;
    usuarioCreatioDTO.endereco.cep = ""+usuarioCreatioDTO.endereco.cep;
    /* Casting de valores */


    this.estudanteService.create(usuarioCreatioDTO).subscribe(() =>{
      this.router.navigate(['']);
    }, error => this.errors = parseWebAPIErrors(error))
  }

}
