import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  resourceMuwasaatURL = environment.url + 'resources/'

  constructor(private http: HttpClient) { }

  findAll(){
      return this.http.get(this.resourceMuwasaatURL + 'allresources')
  }
}
