import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './layout/nav/nav.component';

const routes: Routes = [
  {path:"", component:NavComponent ,   children: [
    {
      path: 'account',
      loadChildren: () =>
        import('./accounts/account.module').then(m => m.AccountModule)
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
