import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtigosComponent } from './artigos/artigos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoInternoComponent } from './produto-interno/produto-interno.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'home', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  { path: 'categoria-edit/:id', component: CategoriaEditComponent },
  { path: 'categoria-delete/:id', component: CategoriaDeleteComponent },
  {path: 'produtos', component: ProdutosComponent},
  { path: 'produto-edit/:id', component: ProdutoEditComponent },
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent },
  {path: 'produto-interno/:id', component: ProdutoInternoComponent},
  { path: 'artigos', component: ArtigosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
