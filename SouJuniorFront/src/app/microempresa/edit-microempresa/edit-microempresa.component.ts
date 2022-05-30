import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { usuarioCreatioDTO, usuarioDTO } from 'src/app/model/usuario.model';
import { SecurityService } from 'src/app/security/security.service';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { EmpreendedorService } from '../empreendedor.service';

@Component({
  selector: 'app-edit-microempresa',
  templateUrl: './edit-microempresa.component.html',
  styleUrls: ['./edit-microempresa.component.scss']
})
export class EditMicroempresaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router: Router, private domSanitizer: DomSanitizer,
    private securityService : SecurityService) { }

  model: usuarioDTO;

  ngOnInit(): void {
    this.securityService.chargeUser();

    this.model = this.securityService.user;
    console.log(this.model);
    /* this.model.imagemPerfil = this.domSanitizer.sanitize(SecurityContext.RESOURCE_URL,this.domSanitizer.bypassSecurityTrustUrl(this.model.imagemPerfil));
    console.log(this.model.imagemPerfil); */
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
