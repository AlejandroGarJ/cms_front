import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'webs',
    loadChildren: () =>
      import('./Modules/web-selector/web-selector.module').then(
        (m) => m.WebSelectorModule
      ),
  },
  {
    path: 'webManagment',
    loadChildren: () =>
      import('./Modules/web-managment/web-managment.module').then(
        (m) => m.WebManagmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
