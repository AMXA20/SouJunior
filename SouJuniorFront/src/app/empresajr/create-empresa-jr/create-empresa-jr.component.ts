import { Component, OnInit } from '@angular/core';
import { empresajrCreationDTO } from '../../model/empresa-jr.model';
import { usuarioCreatioDTO } from '../../model/usuario.model';
import {EmpresajrService} from '../empresajr.service'
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-empresa-jr',
  templateUrl: './create-empresa-jr.component.html',
  styleUrls: ['./create-empresa-jr.component.scss']
})
export class CreateEmpresaJrComponent implements OnInit {

  errors: string[] = [];

  constructor(private empresajrService: EmpresajrService, private router:Router) { }

  ngOnInit(): void {
  }

  saveChanges(usuarioCreatioDTO: usuarioCreatioDTO){
    console.log(usuarioCreatioDTO);
    usuarioCreatioDTO.empresaJr.cnpj = ""+usuarioCreatioDTO.empresaJr.cnpj;
    usuarioCreatioDTO.telefone = ""+usuarioCreatioDTO.telefone;
    usuarioCreatioDTO.endereco.cep = ""+usuarioCreatioDTO.endereco.cep;

    this.empresajrService.create(usuarioCreatioDTO).subscribe(() =>{
      this.router.navigate(['']);
    }, error => this.errors = parseWebAPIErrors(error))
  }

}
