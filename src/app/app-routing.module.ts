import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'supplier', component: FornecedorComponent},
  {path : 'client', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
