import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-web-managment',
  templateUrl: './web-managment.component.html',
  styleUrl: './web-managment.component.css',
})
export class WebManagmentComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  web: { [key: string]: any } = {};
  ngOnInit() {
    this.getWeb().subscribe((res) => {
      this.web = res.web;
      console.log(this.web);
    });
  }

  save() {
    console.log(this.web);
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
}
