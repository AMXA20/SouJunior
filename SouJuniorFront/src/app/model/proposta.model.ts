import {  empreendedorProposta } from "./empreendedor.model";
import {  empresajrProposta } from "./empresa-jr.model";
import { estudanteProposta } from "./estudante.model";
import { postagemDTO } from "./postagem.model";

export interface propostaCreationDTO {
  titulo: string,
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJrId : string,
  empreendedorId : string,
  estudanteId: string,
  perfilLinkedin: string,
}

export interface propostaDTO {
  id: string;
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJr : empresajrProposta,
  empreendedor : empreendedorProposta,
  estudante : estudanteProposta,
  perfilLinkedin : string,
  postagens: postagemDTO []
}

export interface propostaFilterDTO {
  id: string;
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJrId : string,
  nomeFantasiaEmpresaJr : string,
  imagemEmpresaJr: string,
  empreendedorId : string,
  nomeFantasiaEmpreendedor : string,
  imagemEmpreendedor : string,
}

export interface propostaFilter{
  dados: propostaFilterDTO[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  pageIndex: number,
  totalPages: number,
  totalItems: number,
}
