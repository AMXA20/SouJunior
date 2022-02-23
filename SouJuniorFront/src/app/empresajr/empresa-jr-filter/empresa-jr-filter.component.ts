import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { empresajrDTO, empresajrFilter } from 'src/app/model/empresa-jr.model';
import { AutocompleteRamoAtuacaoComponent } from 'src/app/ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';
import { EmpresajrService } from '../empresajr.service';

@Component({
  selector: 'app-empresa-jr-filter',
  templateUrl: './empresa-jr-filter.component.html',
  styleUrls: ['./empresa-jr-filter.component.scss']
})
export class EmpresaJrFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private empresaJrService: EmpresajrService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  empresasJr: empresajrFilter;

  currentPage = 1;
  recordsPerPage = 10;
  initialFormValues: any;
  totalAmountOfRecords;

  @ViewChild(AutocompleteRamoAtuacaoComponent) ramo;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomeFantasia: '',
      ramoAtuacao:'',
    });

    this.form.valueChanges
      .subscribe(values => {
        this.filterEmpresas(values);
        this.writeParametersInURL();
      });

    this.initialFormValues = this.form.value;
    this.readParametersFromURL();
  }

  filterEmpresas(values: any){
    values.PageIndex = this.currentPage;
    values.PageSize = this.recordsPerPage;
    this.empresaJrService.filter(values).subscribe((response: HttpResponse<empresajrFilter>)=>{
      this.empresasJr = response.body;
     /*  this.totalAmountOfRecords = response.body.totalItems; */
      console.log(this.empresasJr);
    })
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

    if (formValues.nomeFantasia){
      queryStrings.push(`NomeFantasia=${formValues.nomeFantasia}`);
    }

    if (formValues.ramoAtuacao){
      queryStrings.push(`RamoAtuacao=${formValues.ramoAtuacao}`);
    }

    queryStrings.push(`PageIndex=${this.currentPage}`);
    queryStrings.push(`PageSize=${this.recordsPerPage}`);

    this.location.replaceState('EmpresaJr/GetByFilter', queryStrings.join('&'));
  }

  paginatorUpdate(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.recordsPerPage = event.pageSize;
    this.writeParametersInURL();
    this.filterEmpresas(this.form.value);
  }

  clearForm(){
    this.form.patchValue(this.initialFormValues);
  }

}
