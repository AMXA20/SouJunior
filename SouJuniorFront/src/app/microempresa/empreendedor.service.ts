import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { empreendedorDTO } from '../model/empreendedor.model';
import { usuarioCreatioDTO, usuarioDTO } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL;

  create(usuarioCreatioDTO: usuarioCreatioDTO){
    return this.http.post(this.apiURL+'Usuario/Create', usuarioCreatioDTO);
  }

  getById(id: number): Observable<usuarioDTO>{
    return this.http.get<usuarioDTO>(`${this.apiURL}/${'/Empreendedor'}/${id}`);
  }

  edit(id: string, usuario: usuarioCreatioDTO){
    return this.http.put(`${this.apiURL}Usuario/${id}`, usuario);
  }
}
