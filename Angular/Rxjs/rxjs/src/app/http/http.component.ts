import { Component, OnInit } from '@angular/core';
import { noop, Observable, of } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const http$ = new Observable(
      (observer: {
        error: any;
        next: any; complete: () => void; 
}) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      return response.json();
    })
    .then (body => {
      observer.next(body);
      observer.complete();
    })
    .catch(err =>{
      observer.error(err);
    })
    }
    );




    http$.subscribe(
      (courses: any) => {
        console.log(courses);
      },
     noop,
      () => {
        console.log("Completed")
      }
    );


  }

}
