import { empresajrCreationDTO, empresajrDTO } from "./empresa-jr.model";
import { estudanteCreationDTO, estudanteDTO } from "./estudante.model";
import { enderecoDTO} from "./endereco.model";
import { empreendedorCreationDTO, empreendedorDTO } from "./empreendedor.model";

export interface usuarioCreatioDTO {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  imagemPerfil: string;
  estudante: estudanteCreationDTO;
  empresaJr: empresajrCreationDTO;
  empreendedor: empreendedorCreationDTO
  endereco: enderecoDTO;
}

export interface usuarioDTO {
  id: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  imagemPerfil: string;
  estudante: estudanteDTO;
  empresaJr: empresajrDTO;
  empreendedor: empreendedorDTO;
  endereco: enderecoDTO;
}

