import { enderecoDTO } from "./endereco.model";
import { ramoAtuacaoDTO } from "./ramoAtuacao.model";

export interface empreendedorCreationDTO {
  cnpj: string;
  descricao: string;
  dataCriacao: Date;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacaoId: number;
}

export interface empreendedorDTO {
  id: string;
  imagemPerfil: string;
  cnpj: string;
  descricao: string;
  dataCriacao: string;
  razaoSocial: string;
  nomeFantasia: string;
  ramoAtuacao: String;
  endereco: enderecoDTO;
}

export interface empreendedorProposta{
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

