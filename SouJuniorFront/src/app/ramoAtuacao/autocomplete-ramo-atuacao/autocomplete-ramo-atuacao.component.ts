import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ramoAtuacaoDTO } from 'src/app/model/ramoAtuacao.model';
import { RamoAtuacaoService } from '../ramo-atuacao.service';


@Component({
  selector: 'app-autocomplete-ramo-atuacao',
  templateUrl: './autocomplete-ramo-atuacao.component.html',
  styleUrls: ['./autocomplete-ramo-atuacao.component.scss']
})




export class AutocompleteRamoAtuacaoComponent implements OnInit {

  myControl = new FormControl();
  options: any[] = [
    { "id": 1, "name": "colour", "cat": "red" },
    { "id": 2, "name": "colour", "cat": "blue" },
    { "id": 3, "name": "colour", "cat": "green" }
  ];
  filteredOptions: Observable<any[]>;

  ramosAtuacao: ramoAtuacaoDTO[];

  @Input()
  ramoSelecionado: ramoAtuacaoDTO;

  constructor(private ramoAtuacaoService: RamoAtuacaoService) { }

  ngOnInit() {
    this.loadRamos();
    console.log(this.ramoSelecionado)
  }

  findOption(val: string) {
    return this.ramosAtuacao.filter((s) => new RegExp(val, 'gi').test(s.descricao));
  }


  displayFn(subject) {
    return subject ? subject.descricao : undefined;
  }

  returnFn(subject){
    return subject.id;
  }

  loadRamos(){
    this.ramoAtuacaoService.getAll().subscribe(ramosAtuacao => {
      this.ramosAtuacao = ramosAtuacao;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this.findOption(value))
      );
    });
    console.log(this.ramosAtuacao);
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
      this.ramoSelecionado = event.option.value;
  }

}
