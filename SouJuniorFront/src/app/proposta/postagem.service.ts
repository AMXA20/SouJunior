import { postagemCreationDTO } from './../model/postagem.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Postagem';

  create(postagemCreationDTO: postagemCreationDTO){
    return this.http.post(this.apiURL+'/Create', postagemCreationDTO);
  }
}
