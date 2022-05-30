import { enderecoDTO } from './endereco.model';
export interface estudanteCreationDTO {
  cpf: string;
  instituicao: string;
  curso: string;
  periodo: number;
}

export interface estudanteDTO {
  id: string;
  cpf: string;
  instituicao: string;
  curso: string;
  periodo: number;
}

export interface estudanteProposta {
  id: string;
  nome: string;
  cpf: string;
  instituicao: string;
  curso: string;
  periodo: number;
  telefone: string;
  imagemPerfil: string;
  linkedin: string;
  email: string;
  endereco: enderecoDTO;
}
