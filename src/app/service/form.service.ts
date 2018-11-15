import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  
  constructor(private httpClient:HttpClient) { }


  // public getfile(filename:string){
   
  //  const url: string ='https://restcountries.eu/rest/v2/name/'+filename+'?fullText=true';
  
  //   return this.httpClient.get(url);
  // }


  // getfile(filename:string) {
  //   const url = `http://www.omdbapi.com/?t=${filename}&apikey=7f7fece3`;
  //   return this.httpClient.get(url);
  // }



}
