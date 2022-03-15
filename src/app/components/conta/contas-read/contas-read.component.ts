import { ContaService } from './../conta.service';
import { Conta } from './../conta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-read',
  templateUrl: './contas-read.component.html',
  styleUrls: ['./contas-read.component.css']
})
export class ContasReadComponent implements OnInit {

  contas!: Conta[]
  displayedColumns = ['id', 'descricao', 'valor', 'vencimento', 'action']

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.contaService.read().subscribe(contas => {
      this.contas = contas
      console.log(this.contas)
      
    })
  }

}
