export interface postagemDTO {
  propostaId : number;
  mensagem : string;
  dataHora : Date;
  nomeUsuario : string;
  id : number;
}

export interface postagemCreationDTO {
  propostaId : string;
  mensagem : string;
  nomeUsuario : string;
}
