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

  Onsearch(data){
    return this.http.post(this.businessMuwasaatURL + 'search', data)
  }
  addRecord(data){
    return this.http.post(this.businessMuwasaatURL + 'addRecord', data)
  }
  getTRRef(){
    return this.http.get(this.businessMuwasaatURL + 'gettrref')
  }
  deleteTRRef(data){
    let id = data.trRef._id
    return this.http.get(this.businessMuwasaatURL + 'deletetrref' + '/' + id)
  }

}
