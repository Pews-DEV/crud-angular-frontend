import { Router, ActivatedRoute } from '@angular/router';
import { ContaService } from './../conta.service';
import { Conta } from './../conta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-delete',
  templateUrl: './contas-delete.component.html',
  styleUrls: ['./contas-delete.component.css']
})
export class ContasDeleteComponent implements OnInit {

  conta!: Conta

  constructor(
      private contaService: ContaService, 
      private router: Router, 
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.contaService.readById(id).subscribe(conta => {
      this.conta = conta
    })
  }

  deleteConta(): void {
    this.contaService.delete(this.conta.id).subscribe(() => {
      this.contaService.showMessage('Conta excluida com sucesso!')
      this.router.navigate(['/contas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contas'])
  }

}
