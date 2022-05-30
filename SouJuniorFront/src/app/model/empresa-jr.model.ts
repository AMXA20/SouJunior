import { enderecoDTO } from './endereco.model';
import {ramoAtuacaoDTO} from './ramoAtuacao.model'

export interface empresajrCreationDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}

export interface empresajrDTO {
  id: string;
  imagemPerfil: string;
  cnpj: string;
  descricao: string;
  dataCriacao: string;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacao: ramoAtuacaoDTO;
  endereco: enderecoDTO;
}

export interface empresajrProposta{
  id: string;
  imagemPerfil: string;
  email: string;
  telefone: string;
  cnpj: string;
  descricao: string;
  dataCriacao: string;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacao: String;
  endereco: enderecoDTO;
}

export interface empresajrFilter{
  dados: empresajrProposta[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  pageIndex: number,
  totalPages: number,
  totalItems: number,
}
