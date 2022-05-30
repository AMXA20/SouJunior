import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { propostaCreationDTO, propostaDTO, propostaFilter } from '../model/proposta.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'Proposta';

  create(propostaCreationDTO: propostaCreationDTO){
    return this.http.post(this.apiURL+'/Create', propostaCreationDTO);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  getAll(): Observable<propostaDTO[]>{
    return this.http.get<propostaDTO[]>(this.apiURL);
  }

  getById(id: string): Observable<propostaDTO> {
    return this.http.get<propostaDTO>(`${this.apiURL}/${id}`);
  }

  public filter(values: any): Observable<any>{
    const params = new HttpParams({fromObject: values});
    return this.http.get<propostaFilter>(`${this.apiURL}/GetByFilter`, {params, observe: 'response'});
  }

  edit(id: string, proposta: propostaCreationDTO){
    /* const formData = this.buildFormData(proposta);
    console.log(proposta); */
    return this.http.put(`${this.apiURL}/${id}`, proposta);
  }

  private buildFormData(proposta: propostaCreationDTO): FormData {
    const formData = new FormData();

    formData.append('titulo', proposta.titulo);

    if (proposta.descricao){
      formData.append('descricao', proposta.descricao);
    }

    if (proposta.dataCriacao){
      formData.append('dataCriacao', proposta.dataCriacao);
    }

    if (proposta.empresaJrId){
      formData.append('empresaJrId', proposta.empresaJrId);
    }

    if (proposta.empreendedorId){
      formData.append('empreendedorId', proposta.empreendedorId);
    }

    return formData;
  }
}
