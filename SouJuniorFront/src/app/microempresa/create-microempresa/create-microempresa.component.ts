import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioCreatioDTO } from 'src/app/model/usuario.model';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { empreendedorCreationDTO } from '../../model/empreendedor.model';
import { EmpreendedorService } from '../empreendedor.service';

@Component({
  selector: 'app-create-microempresa',
  templateUrl: './create-microempresa.component.html',
  styleUrls: ['./create-microempresa.component.scss']
})
export class CreateMicroempresaComponent implements OnInit {

  errors: string[] = [];

  constructor(private empreendedorService: EmpreendedorService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(usuarioCreatioDTO: usuarioCreatioDTO){

    usuarioCreatioDTO.empreendedor.cnpj = ""+usuarioCreatioDTO.empreendedor.cnpj;
    usuarioCreatioDTO.telefone = ""+usuarioCreatioDTO.telefone;
    usuarioCreatioDTO.endereco.cep = ""+usuarioCreatioDTO.endereco.cep;

    this.empreendedorService.create(usuarioCreatioDTO).subscribe(() =>{
        this.router.navigate(['']);
    }, error => this.errors = parseWebAPIErrors(error))
    console.log(usuarioCreatioDTO)
  }

}
