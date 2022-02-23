import { Component, Input, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-authorize-view',
  templateUrl: './authorize-view.component.html',
  styleUrls: ['./authorize-view.component.scss']
})
export class AuthorizeViewComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  @Input()
  role: string;

  ngOnInit(): void {
  }

  public isAuthorized(){
    if (this.role){
      return this.securityService.getRole() === this.role;
    } else{
      return this.securityService.isAuthenticated();
    }
  }

}
