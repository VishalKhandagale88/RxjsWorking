import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  ngOnInit(): void {
    // promise syntax
    let promise = new Promise((resolve, reject) => {
      resolve("Promise will success");
    });

    promise.then(res => {
      console.log("success from promise");
    })
    // Observation from above code
    /*ngOnInIt is a method*/
    //--------------------------------------------------
    // rejected promise
    let promise1 = new Promise((resolve, reject) => {
      reject("Failure in promise1 ")
    })

    promise1.catch(res => {
      console.log(res);
    });

    //--------------------------------------------------

    let buyingProduct = new Promise((resolve, reject) => {
      if (this.availableProducts()) {
        return setTimeout(() => {
          resolve("products bought");
        }, 2000)
      } else if (this.productsAreNotAvailable()) {
        return setTimeout(() => {
          resolve("Product not bought")
        }, 2000);
      } else {
        return setTimeout(() => {
          resolve("product not there")
        }, 2000);
      }
    })

    buyingProduct.then(res => {
      console.log(res);
    }).catch(res => {
      console.log(res);
    })
    //------------------------------------------------------------

  }
  callAFunction() {
    console.log("button clicked and function is called");

  }
  availableProducts() {
    return true;
  }
  productsAreNotAvailable() {
    return false;
  }
}
