import { Conta } from './../conta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from './../conta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-update',
  templateUrl: './contas-update.component.html',
  styleUrls: ['./contas-update.component.css']
})
export class ContasUpdateComponent implements OnInit {

  conta!: Conta

  constructor(
    private contaService: ContaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.contaService.readById(id).subscribe(conta => {
      this.conta = conta
    })
  }

  updateConta(): void {
    this.contaService.update(this.conta).subscribe(() => {
      this.contaService.showMessage('Conta alterada com sucesso!')
      this.router.navigate(['/contas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contas'])
  }

}
