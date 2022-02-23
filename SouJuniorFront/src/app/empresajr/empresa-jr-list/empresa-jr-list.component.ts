import { Component, Input, OnInit } from '@angular/core';
import { empresajrDTO } from 'src/app/model/empresa-jr.model';
import { EmpresajrService } from '../empresajr.service';

@Component({
  selector: 'app-empresa-jr-list',
  templateUrl: './empresa-jr-list.component.html',
  styleUrls: ['./empresa-jr-list.component.scss']
})
export class EmpresaJrListComponent implements OnInit {


  @Input()
  empresasJr: empresajrDTO[];

  columnsToDisplay = ['imagemPerfil', 'nomeFantasia','ramoAtuacao','actions'];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
