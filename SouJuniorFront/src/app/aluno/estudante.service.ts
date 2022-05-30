import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarioCreatioDTO } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Usuario/Create';

  create(usuarioCreatioDTO: usuarioCreatioDTO){
    return this.http.post(this.apiURL, usuarioCreatioDTO);
  }

}
