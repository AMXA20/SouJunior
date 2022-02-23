import { Component, Input, OnInit, Output } from '@angular/core';
import { usuarioDTO } from '../model/usuario.model';
import { SecurityService } from '../security/security.service';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public securityService: SecurityService, private usuarioService: UsuarioService) { }

  usuario: usuarioDTO;

  ngOnInit(): void {
      this.securityService.chargeUser();
  }

  logout(){
    this.securityService.logout();
  }

}
