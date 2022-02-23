import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { userCredentials } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) { }

  errors: string[] = [];

  @ViewChild(MenuComponent) menu;

  ngOnInit(): void {
  }

  ngAfterViewInit() : void{
  }

  login(userCredentials: userCredentials) {
    this.securityService
      .login(userCredentials)
      .subscribe((authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(['']);
      }, error => this.errors = parseWebAPIErrors(error));

      console.log(userCredentials);
  }

}
