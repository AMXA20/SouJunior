import { Component, Input, OnInit } from '@angular/core';
import { propostaDTO, propostaFilter, propostaFilterDTO } from 'src/app/model/proposta.model';

@Component({
  selector: 'app-proposta-list',
  templateUrl: './proposta-list.component.html',
  styleUrls: ['./proposta-list.component.scss']
})
export class PropostaListComponent implements OnInit {

  @Input()
  propostas: propostaFilterDTO[];



  columnsToDisplay = ['imagemPerfil', 'nomeFantasia','titulo','dataCriacao', 'isAceita','actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  constructor() { }

  ngOnInit(): void {
  }
}
