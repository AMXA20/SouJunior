import { usuarioCreatioDTO, usuarioDTO } from "../model/usuario.model";

export interface userCredentials{
  email: string;
  senha: string;
}

export interface authenticationResponse{
  token: string;
  expiration: Date;
  usuario: usuarioDTO;
}

export interface userCredentials{
  email: string;
  password: string;
}
