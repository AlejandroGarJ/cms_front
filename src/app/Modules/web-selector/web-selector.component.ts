import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environment/environment';
import { Router } from '@angular/router';

export type WebName = {
  name: string;
  domain: string;
  id: string;
};
@Component({
  selector: 'app-web-selector',
  templateUrl: './web-selector.component.html',
  styleUrl: './web-selector.component.css',
})
export class WebSelectorComponent {
  constructor(private http: HttpClient, private router: Router) {}
  websNames: WebName[] = [];
  loading: boolean = true;
  ngOnInit() {
    this.getWebs().subscribe((res) => {
      this.loading = false;
      res.webs.forEach((web: any) => {
        const webTemp: WebName = {
          name: web.name,
          domain: web.domain,
          id: web.id,
        };
        this.websNames.push(webTemp);
      });
    });
  }

  goToWebManagment(webId: string) {
    this.router.navigate(['/webManagment'], { queryParams: { id: webId } });
  }

  private getWebs() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });

    return this.http.post<any>(
      `${environment.apiUrl}/web/getWebsDomainByUser`,
      {},
      { headers }
    );
  }
}
