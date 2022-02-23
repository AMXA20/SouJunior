import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ramoAtuacaoDTO } from '../model/ramoAtuacao.model';

@Injectable({
  providedIn: 'root'
})
export class RamoAtuacaoService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'RamoAtuacao/GetAll';

  getAll(): Observable<ramoAtuacaoDTO[]>{
    return this.http.get<ramoAtuacaoDTO[]>(this.apiURL);
  }

}
