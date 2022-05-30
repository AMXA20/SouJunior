import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { propostaFilter } from 'src/app/model/proposta.model';
import { SecurityService } from 'src/app/security/security.service';
import { PropostaService } from '../proposta.service';

@Component({
  selector: 'app-proposta-filter',
  templateUrl: './proposta-filter.component.html',
  styleUrls: ['./proposta-filter.component.scss']
})
export class PropostaFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private propostaService: PropostaService, private location: Location,
    private activatedRoute: ActivatedRoute, private securityService: SecurityService ) { }

    form: FormGroup;

    propostas: propostaFilter;

    currentPage = 1;
    recordsPerPage = 10;
    initialFormValues: any;
    totalAmountOfRecords;

    columnsToDisplay = ['imagemPerfil','nomeFantasia','titulo','dataCriacao','isAceita', 'actions'];

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        isAceita: '',
      });

      this.form.valueChanges
        .subscribe(values => {
          this.filterPropostas(values);
          this.writeParametersInURL();
        });

      this.initialFormValues = this.form.value;
      this.readParametersFromURL();

    }

   /*  loadProposta(){
      this.propostaService.getAll().subscribe(propostas => {
        this.propostas = propostas;
      });
    }

    delete(id: string){
      this.propostaService.delete(id)
      .subscribe(() => {
        this.loadProposta();
      });
    }
   */
    filterPropostas(values: any){

      this.securityService.chargeUser();
      if(this.securityService.user.empresaJr == undefined && this.securityService.user.estudante == undefined){
        values.EmpreendedorId = this.securityService.user.empreendedor.id;
      }else if (this.securityService.user.estudante == undefined && this.securityService.user.empreendedor == undefined){
        values.EmpresaJrId = this.securityService.user.empresaJr.id;
      }
      else{
        values.estudanteId= this.securityService.user.estudante.id;
      }
      values.PageIndex = this.currentPage;
      values.PageSize = this.recordsPerPage;
      this.propostaService.filter(values).subscribe((response: HttpResponse<propostaFilter>)=>{
        this.propostas = response.body;
        this.totalAmountOfRecords = response.body.totalItems;
        let aux: any []= [];
        this.propostas.dados.forEach(function (value) {
          if(value.empreendedorId != '00000000-0000-0000-0000-000000000000'){
            aux.push(value);
          }
        });
        this.propostas.dados = aux;
      });

    }

    private readParametersFromURL(){
      this.activatedRoute.queryParams.subscribe(params => {
        var obj: any = {};

        if (params.NomeFantasia){
          obj.nomeFantasia = params.NomeFantasia;
        }

        if (params.RamoAtuacao){
          obj.ramoAtuacao = params.RamoAtuacao;
        }

        if (params.PageIndex){
          this.currentPage = params.PageIndex;
        }

        if (params.PageSize){
          this.recordsPerPage = params.PageSize;
        }

        this.form.patchValue(obj);
      });
    }

    private writeParametersInURL(){
      const queryStrings = [];

      const formValues = this.form.value;

  /*     if (formValues.nomeFantasia){
        queryStrings.push(`NomeFantasia=${formValues.nomeFantasia}`);
      }

      if (formValues.ramoAtuacao){
        queryStrings.push(`RamoAtuacao=${formValues.ramoAtuacao}`);
      } */
      queryStrings.push(`EmpreendedorId= A57C744C-3EFF-4BA6-A3A4-F61879EC994C`);
      queryStrings.push(`PageIndex=${this.currentPage}`);
      queryStrings.push(`PageSize=${this.recordsPerPage}`);

      this.location.replaceState('EmpresaJr/GetByFilter', queryStrings.join('&'));
    }

    paginatorUpdate(event: PageEvent){
      this.currentPage = event.pageIndex + 1;
      this.recordsPerPage = event.pageSize;
      this.writeParametersInURL();
      this.filterPropostas(this.form.value);
    }

    clearForm(){
      this.form.patchValue(this.initialFormValues);
    }
}
