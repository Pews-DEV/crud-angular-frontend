import { Conta } from './../conta.model';
import { ContaService } from './../conta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contas-create',
  templateUrl: './contas-create.component.html',
  styleUrls: ['./contas-create.component.css']
})
export class ContasCreateComponent implements OnInit {

  conta: Conta = {
    descricao: '',
    valor: 0.00,
    vencimento: '',
  }

  constructor(
      private constaService: ContaService,
      private router: Router
    ) { }

  ngOnInit(): void { }

  createConta(): void {
    this.constaService.create(this.conta).subscribe(() => {
      this.constaService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/contas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contas'])
  }

}
