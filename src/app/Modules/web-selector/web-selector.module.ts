import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSelectorComponent } from './web-selector.component';
import { RouterModule, Routes } from '@angular/router';
import { userAuthGuard } from '../../guards/auth.guard';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: WebSelectorComponent,
    canActivate: [userAuthGuard],
  },
];

@NgModule({
  declarations: [WebSelectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    SharedModule,
  ],
})
export class WebSelectorModule {}
