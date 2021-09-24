import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  businessMuwasaatURL = environment.url + 'businessmuwasaat/'

  constructor(private http: HttpClient) { }

  findRecord(){
    return this.http.get(this.businessMuwasaatURL + 'findRecord')
  }

  addRecord(data){
    return this.http.post(this.businessMuwasaatURL + 'addRecord', data)
  }

}
