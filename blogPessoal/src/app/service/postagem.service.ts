import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

getAllPostagens(){
  return this.http.get('http://32.220.57.14:8080/postagens');
}

}
