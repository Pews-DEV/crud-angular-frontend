import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contas-crud',
  templateUrl: './contas-crud.component.html',
  styleUrls: ['./contas-crud.component.css']
})
export class ContasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/contas/create'])
    
  }

}
