import { ContasDeleteComponent } from './components/conta/contas-delete/contas-delete.component';
import { ContasUpdateComponent } from './components/conta/contas-update/contas-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContasCrudComponent } from './views/contas-crud/contas-crud.component';
import { ContasCreateComponent } from './components/conta/contas-create/contas-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"contas",
  component: ContasCrudComponent
},
{
  path:"contas/create",
  component: ContasCreateComponent
},
{
  path:"contas/update/:id",
  component: ContasUpdateComponent
},
{
  path:"contas/delete/:id",
  component: ContasDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
