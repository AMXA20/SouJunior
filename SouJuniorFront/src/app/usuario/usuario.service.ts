import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioCreatioDTO, usuarioDTO } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL+'Usuario';

  create(usuarioCreatioDTO: usuarioCreatioDTO){
    console.log(usuarioCreatioDTO);
    return this.http.post(this.apiURL+'/Create', usuarioCreatioDTO);
  }

  getById(id: string): Observable<usuarioDTO>{
    return this.http.get<usuarioDTO>(`${this.apiURL}/${id}`);
  }

  edit(id: string, usuario: usuarioDTO){
    console.log(usuario);
    return this.http.put(`${this.apiURL}/${id}`, usuario);
  }
}
