import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { propostaFilterDTO } from 'src/app/model/proposta.model';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.scss']
})
export class CandidatoListComponent implements OnInit {

  @Input()
  propostas: propostaFilterDTO[];



  columnsToDisplay = ['imagemPerfil', 'nome','titulo','dataCriacao', 'isAceita','actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  constructor() { }

  ngOnInit(): void {
  }


}
