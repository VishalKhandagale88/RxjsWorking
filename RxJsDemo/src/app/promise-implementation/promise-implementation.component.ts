import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';

@Component({
  selector: 'app-promise-implementation',
  templateUrl: './promise-implementation.component.html',
  styleUrls: ['./promise-implementation.component.css']
})
export class PromiseImplementationComponent implements OnInit {
  ngOnInit(): void {
    this.getData().then(data => {
      console.log(data);
    })

  }

  async getData() {
    return "Data received";
  }

  carData: any ;

  car = {
    "name": "Mahindra Thar",
    "review": 4.5,
    "price": "10.54 Lakh",
    "state": "New Delhi"
  }

  buyCar = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.car);
    }, 3000);
  })
  // Ex 1 : with promise
  fetchData1() {
    this.carData = "featching..."
    this.buyCar.then(result => {
      console.log(result);
      this.carData = JSON.stringify(result);
    })
  }

  //Ex 2 :Using Async / Await
  dataForFetch2:any;
  async fetchData2(){
    this.dataForFetch2="featching...."
    let data = await this.buyCar;
    this.dataForFetch2=JSON.stringify(data);
  }

  //Ex 3 : using fetch api
  dataFromJsonPlaceholder= fetch('https://jsonplaceholder.typicode.com/todos')
                                .then(response => response.json())
  dataForFetch3:any;
  fetchData3(){
    this.dataForFetch3="featching...."
   this.dataFromJsonPlaceholder.then(result=>{
    this.dataForFetch3=JSON.stringify(result);
   })
  }

  //Ex 4 :using async / await with fetch api
  dataForFetch4:any;
  async fetchData4(){
    this.dataForFetch4="fetching....";
    let res = await this.dataFromJsonPlaceholder;
    this.dataForFetch4 = JSON.stringify(res);
  }
}
