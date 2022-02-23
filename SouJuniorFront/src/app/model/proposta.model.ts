import { empreendedorDTO, empreendedorProposta } from "./empreendedor.model";
import { empresajrDTO, empresajrProposta } from "./empresa-jr.model";

export interface propostaCreationDTO {
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJrId : string,
  empreendedorId : string,
}

export interface propostaDTO {
  id: string;
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJr : empresajrProposta,
  empreendedor : empreendedorProposta,
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
