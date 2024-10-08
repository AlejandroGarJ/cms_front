import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebManagmentComponent } from './web-managment.component';
import { userAuthGuard } from '../../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { RecursiveComponent } from './recursive/recursive.component';
import { IsArrayPipe } from '../../is-array.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
const routes: Routes = [
  {
    path: '',
    component: WebManagmentComponent,
    canActivate: [userAuthGuard],
  },
];

@NgModule({
  declarations: [WebManagmentComponent, RecursiveComponent, IsArrayPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class WebManagmentModule {}
