import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    this.tarefas = [];
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
