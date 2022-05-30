import { empreendedorDTO, empreendedorProposta } from "./empreendedor.model";
import { empresajrDTO, empresajrProposta } from "./empresa-jr.model";
import { estudanteProposta } from "./estudante.model";

export interface candidatoCreationDTO {
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJrId : string,
  empreendedorId : string,
  estudanteId: string,
}

export interface candidatoDTO {
  id: string;
  titulo: string;
  descricao : string,
  dataCriacao : string,
  isAceita: boolean,
  empresaJr : empresajrProposta,
  empreendedor : empreendedorProposta,
  estudante : estudanteProposta
}

export interface candidatoFilterDTO {
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

export interface candidatoFilter{
  dados: candidatoFilterDTO[],
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  pageIndex: number,
  totalPages: number,
  totalItems: number,
}
