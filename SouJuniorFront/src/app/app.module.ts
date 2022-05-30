
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { CreateEmpresaJrComponent } from './empresajr/create-empresa-jr/create-empresa-jr.component';
import { FormEmpresaJrComponent } from './empresajr/form-empresa-jr/form-empresa-jr.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAlunoComponent } from './aluno/create-aluno/create-aluno.component';
import { FormAlunoComponent } from './aluno/form-estudante/form-estudante.component';
import { InputImgComponent} from './utilities/input-img/input-img.component';
import { CreateMicroempresaComponent } from './microempresa/create-microempresa/create-microempresa.component';
import { FormMicroempresaComponent } from './microempresa/form-microempresa/form-microempresa.component'
import {MatStepperModule} from '@angular/material/stepper';
import { AutocompleteRamoAtuacaoComponent } from './ramoAtuacao/autocomplete-ramo-atuacao/autocomplete-ramo-atuacao.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { AuthenticationFormComponent } from './security/authentication-form/authentication-form.component';
import { LoginComponent } from './security/login/login.component';
import { EditMicroempresaComponent } from './microempresa/edit-microempresa/edit-microempresa.component';
import { EditAlunoComponent } from './aluno/edit-aluno/edit-aluno.component';
import { EditEmpresaJrComponent } from './empresajr/edit-empresa-jr/edit-empresa-jr.component';
import { AuthorizeViewComponent } from './security/authorize-view/authorize-view.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import {EmpresaJrListComponent} from './empresajr/empresa-jr-list/empresa-jr-list.component';
import {EmpresaJrFilterComponent} from './empresajr/empresa-jr-filter/empresa-jr-filter.component';
import { FormPropostaComponent } from './proposta/form-proposta/form-proposta.component';
import { CreatePropostaComponent } from './proposta/create-proposta/create-proposta.component';
import { DetalhePropostaComponent } from './proposta/detalhe-proposta/detalhe-proposta.component';
import { JwtInterceptorService } from './security/jwt-interceptor.service';
import { EditPropostaComponent } from './proposta/edit-proposta/edit-proposta.component';
import { PropostaListComponent } from './proposta/proposta-list/proposta-list.component';
import { PropostaFilterComponent } from './proposta/proposta-filter/proposta-filter.component';
import { FormCreateEmpresajrComponent } from './empresajr/form-create-empresajr/form-create-empresajr.component';
import { FormCreateMicroempresaComponent } from './microempresa/form-create-microempresa/form-create-microempresa.component';
import { DisplayErrorsComponent } from './utilities/display-errors/display-errors.component';
import { FormCreateEstudanteComponent } from './aluno/form-create-estudante/form-create-estudante.component';
import { CreateCandidatoComponent } from './candidato/create-candidato/create-candidato.component';
import { DetalheCandidatoComponent } from './candidato/detalhe-candidato/detalhe-candidato.component';
import { EditCandidatoComponent } from './candidato/edit-candidato/edit-candidato.component';
import { FormCandidatoComponent } from './candidato/form-candidato/form-candidato.component';
import { CandidatoFilterComponent } from './candidato/candidato-filter/candidato-filter.component';
import { CandidatoListComponent } from './candidato/candidato-list/candidato-list.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateEmpresaJrComponent,
    FormEmpresaJrComponent,
    HomeComponent,
    CreateAlunoComponent,
    FormAlunoComponent,
    InputImgComponent,
    CreateMicroempresaComponent,
    FormMicroempresaComponent,
    AutocompleteRamoAtuacaoComponent,
    CarouselComponent,
    AuthenticationFormComponent,
    LoginComponent,
    EditMicroempresaComponent,
    EditAlunoComponent,
    EditEmpresaJrComponent,
    AuthorizeViewComponent,
    GenericListComponent,
    EmpresaJrListComponent,
    EmpresaJrFilterComponent,
    FormPropostaComponent,
    CreatePropostaComponent,
    DetalhePropostaComponent,
    EditPropostaComponent,
    PropostaListComponent,
    PropostaFilterComponent,
    FormCreateEmpresajrComponent,
    FormCreateMicroempresaComponent,
    DisplayErrorsComponent,
    FormCreateEstudanteComponent,
    CreateCandidatoComponent,
    DetalheCandidatoComponent,
    EditCandidatoComponent,
    FormCandidatoComponent,
    CandidatoFilterComponent,
    CandidatoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatStepperModule,
    TextMaskModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
