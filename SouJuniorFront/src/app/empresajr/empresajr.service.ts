import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { usuarioCreatioDTO, usuarioDTO } from '../model/usuario.model';
import { empresajrDTO, empresajrFilter, empresajrProposta } from '../model/empresa-jr.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresajrService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL;

  create(usuarioCreatioDTO: usuarioCreatioDTO){
    return this.http.post(this.apiURL+'Usuario/Create', usuarioCreatioDTO);
  }

  getEmpresas(nomeFantasia: String, ramoAtuacao: String, pageIndex: Number, PageSize: Number): Observable<empresajrDTO[]>{
    return this.http.get<empresajrDTO[]>(this.apiURL+'GetByFilter?NomeFantasia='+nomeFantasia+'&RamoAtuacao='+ramoAtuacao+'&PageIndex='+1+'&PageSize='+2);
  }

  public filter(values: any): Observable<any>{
    const params = new HttpParams({fromObject: values});
    return this.http.get<empresajrFilter>(`${this.apiURL}EmpresaJr/GetByFilter`, {params, observe: 'response'});
  }

  getById(id: number): Observable<empresajrProposta>{
    return this.http.get<empresajrProposta>(`${this.apiURL}EmpresaJr/${id}`);
  }



}
