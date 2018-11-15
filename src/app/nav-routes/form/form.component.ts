import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/service/form.service';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // listItemSubscription: Subscription;
  // items = new Array<string>();
  // file;
  //  obj: any;
  //  filename: string;
  constructor ( private formService:FormService,private communicationService: CommunicationService
    ,private httpClient:HttpClient){ } 

    movie=new Array<string>();
    name = '';
    tital: string;
    profile:boolean;

  ngOnInit() {
    
  }

  onName(event:any){
    this.name=event.target.value;
    this.profile=false;
  }


  getProfile(name){
    const url = 'https://restcountries.eu/rest/v2/name/'+name+'?fullText=true%27';
    console.log(url);
    return this.httpClient.get(url); 
  }
  datt(){
    this.getProfile(this.name).subscribe((payload)=>{
      console.log(payload);
      this.movie.push(payload.toString())
    });

   }


 

   postProfile(){
     this.httpClient.post('	http://dummy.restapiexample.com/api/v1/create',
     {
      name:'morpheus',
      job:'postman',
     })
   }







  // getProfile(){
  //   console.log(this .name);
  //   this.httpClient.get(`https://restcountries.eu/rest/v2/name/india?fullText=true%27`)
  //   .subscribe(
  //     (data: any[])=>{

  //       if(data.length){
  //         this.tital=data[0].name;
  //         this.profile =true;
  //       }
  //     }

  //   )
  // }

  // ngOnInit() {
  //   // subscribe here
  //   this.listItemSubscription = this.communicationService
  //     .$listItems.subscribe( (item) => {
  //       this.formService.getfile(item).subscribe( (payload) => {
  //         console.log(payload);
  //         this.file = payload;
  //       });
  //     });
  // }

// public getUser(){
//   this.formService.getfile(this.filename).subscribe(res => this.obj )
//   console.log(this.obj);
// }
 
// ngOnDestroy() {
//   // unsubscribe if defined
//   if (this.listItemSubscription) {
//     this.listItemSubscription.unsubscribe();
//   }
// }
}
