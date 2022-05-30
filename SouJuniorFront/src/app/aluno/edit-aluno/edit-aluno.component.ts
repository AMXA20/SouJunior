import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioCreatioDTO, usuarioDTO } from 'src/app/model/usuario.model';
import { SecurityService } from 'src/app/security/security.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-edit-aluno',
  templateUrl: './edit-aluno.component.html',
  styleUrls: ['./edit-aluno.component.scss']
})
export class EditAlunoComponent implements OnInit {


  constructor(private usuarioService: UsuarioService,
    private router: Router, private domSanitizer: DomSanitizer,
    private securityService : SecurityService) { }

  model: usuarioDTO;

  ngOnInit(): void {
    this.securityService.chargeUser();
    this.model = this.securityService.user;
  }

  saveChanges(usuarioDTO: usuarioDTO){
    this.securityService.chargeUser();
    console.log(usuarioDTO);
    this.usuarioService.edit(this.model.id, usuarioDTO)
    .subscribe(() => {
      this.router.navigate([""]);
    });
  }

}
