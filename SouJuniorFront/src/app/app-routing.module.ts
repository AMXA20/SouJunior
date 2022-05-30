import { EditCandidatoComponent } from './candidato/edit-candidato/edit-candidato.component';
import { CandidatoFilterComponent } from './candidato/candidato-filter/candidato-filter.component';
import { CreateCandidatoComponent } from './candidato/create-candidato/create-candidato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpresaJrComponent } from './empresajr/create-empresa-jr/create-empresa-jr.component';
import { CreateMicroempresaComponent } from './microempresa/create-microempresa/create-microempresa.component';
import { CreateAlunoComponent } from './aluno/create-aluno/create-aluno.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { EditAlunoComponent } from './aluno/edit-aluno/edit-aluno.component';
import { EditMicroempresaComponent } from './microempresa/edit-microempresa/edit-microempresa.component';
import { EditEmpresaJrComponent } from './empresajr/edit-empresa-jr/edit-empresa-jr.component';
import { isEmpresaJr } from './is_empresajr.guard';
import { isMicroEmpresa } from './is_microempresa.guard';
import { isEstudante } from './is_estudante.guard';
import { EmpresaJrFilterComponent } from './empresajr/empresa-jr-filter/empresa-jr-filter.component';
import { CreatePropostaComponent } from './proposta/create-proposta/create-proposta.component';
import { EditPropostaComponent } from './proposta/edit-proposta/edit-proposta.component';
import { PropostaFilterComponent } from './proposta/proposta-filter/proposta-filter.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createEmpresaJr', component: CreateEmpresaJrComponent},
  {path: 'editEmpresaJr/:id', component: EditEmpresaJrComponent, canActivate: [isEmpresaJr]},
  {path: 'createMicroEmpresa', component: CreateMicroempresaComponent},
  {path: 'editMicroEmpresa/:id', component: EditMicroempresaComponent, canActivate: [isMicroEmpresa]},
  {path: 'createAluno', component: CreateAlunoComponent},
  {path: 'editAluno/:id', component: EditAlunoComponent,  canActivate: [isEstudante]},
  {path: 'login', component: LoginComponent},
  {path: 'buscaEmpresa', component: EmpresaJrFilterComponent},
  {path: 'mpe/detalheProposta/:id', component: CreatePropostaComponent},
  {path: 'listaProposta', component: PropostaFilterComponent},
  {path: 'listaProposta/detalhe/:id', component: EditPropostaComponent},
  {path: 'estudante/detalheCandidato/:id', component: CreateCandidatoComponent},
  {path: 'listaCandidato', component: CandidatoFilterComponent},
  {path: 'listaCandidato/detalhe/:id', component: EditCandidatoComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
