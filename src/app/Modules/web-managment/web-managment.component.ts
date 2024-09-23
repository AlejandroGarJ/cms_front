import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-web-managment',
  templateUrl: './web-managment.component.html',
  styleUrl: './web-managment.component.css',
})
export class WebManagmentComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}
  loading = false;
  web: { [key: string]: any } = {};
  ngOnInit() {
    this.getWeb().subscribe((res) => {
      this.web = res.web;
      console.log(this.web);
    });
  }

  private getWeb() {
    const webId = this.route.snapshot.queryParamMap.get('id');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });

    return this.http.post<any>(
      `${environment.apiUrl}/web/getWebById`,
      { webId },
      { headers }
    );
  }

  save() {
    this.loading = true;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });

    this.http
      .post<any>(
        `${environment.apiUrl}/web/updateWeb`,
        { web: this.web },
        { headers }
      )
      .subscribe((res) => {
        this.loading = false;
        if (res.response) {
          this.showNotification(
            'El contenido de tu web se actualizó con exito',
            ''
          );
        }
      });
  }

  showNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
