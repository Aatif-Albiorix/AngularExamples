import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {

  checkAge(age: number) { 
    return age>= 18; 
  }

  fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

  
  fnFilter() {
    // syntax: array.filter(function(currentValue, index, arr), thisValue)

    const age = [23, 15, 30, 17, 24, 50];
    console.log('Given Age is ' , age)
    const result = age.filter(this.checkAge)
  console.log("Return only Adult values: " + result );
  }

  fnConcat() {
    // syntax: array1.concat(array2, array3, ..., arrayX)

    const alpha = ["a", "b", "c"]; 
    const beta = ['d', 'e', 'f'];
    const gama = ['g', 'h'];

    console.log('first array is: ', alpha);
    console.log('second array is: ', beta);
    console.log('third array is: ', gama);

    const result = gama.concat(alpha, beta); 
    console.log('Result array is :', result);
  
  }

  fnCopywithIn() {
  // syntax : array.copyWithin(target, start, end)

    console.log('Array is: ', this.fruits)

    const result = this.fruits.copyWithin(2,0, 2);
    console.log('Result array is : ', result)
  }

  fnEntries() {
    // syntax: array.entries()

    console.log('Given Array is :', this.fruits)
    
    const f = this.fruits.entries();

    for(let x of f){
      console.log('Entries :',x)
    }
  }

  fnEvery() {
    // syntax: array.every(function(currentValue, index, arr), thisValue)

    const ages = [32, 33, 16, 40];
    console.log('Given Array is: ', ages)

    const result = ages.every(this.checkAge)

    console.log('Check every element is bigger than 18 or not',result)
  }

  fnFill() {
    // syntax: array.fill(value, start, end)

    const fruits = ["Banana", "Orange", "Apple", "Mango",  'Coconut', 'Cherry'];
    console.log('Given array is :', fruits)
    const result = fruits.fill("Kiwi", 2, 4);
  
    console.log('Result array is :', result)
  }

  fnFind() {
    // syntax: array.find(function(currentValue, index, arr),thisValue)

    const ages = [3, 10, 18, 20];
    console.log('Given Array is: ', ages);

    const result = ages.find(this.checkAge);

    console.log('Result array is: ', result)

  }

  fnFindIndex() {
    // syntax: array.findIndex(function(currentValue, index, arr), thisValue)

    const ages = [15, 14, 21, 18, 16];
    console.log('Given Array is: ', ages);

    const result = ages.findIndex(this.checkAge);
    console.log('Result is : ', result);
  }

  fnForEach() {
    // syntax: array.forEach(function(currentValue, index, arr), thisValue)
    let sum = 0;
    const numbers = [65, 44, 12, 4];

    console.log('Given Array is : ', numbers);
    numbers.forEach(myFunction);
    
    console.log('Result is: ', sum);
    
    function myFunction(item: any) {
      sum += item;
    }
  }

  fnFrom() {
    // syntax: Array.from(object, mapFunction, thisValue)

    let word = 'ABCDEF';
    console.log('Given String is :', word);
    const arr = Array.from(word);

    console.log('result array is: ', arr);
  }

  fnInclude() {
    // syntax: array.includes(element, start)


    console.log('Given Array is : ', this.fruits);
    const result = this.fruits.includes('Banana', 3)
    console.log('result is: ', result); 
  }

  fnIndexOf() {
    // syntax: array.indexOf(item, start)
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
    console.log('Given Array is: ', fruits);
    let index = fruits.indexOf("Apple", 3);

    console.log('Result is: ', index);
  }

  fnIsArray() {
    // syntax: Array.isArray(obj)

    console.log('Given Array is: ',  this.fruits);
    let result = Array.isArray(this.fruits);

    console.log('result is: ', result);
  }

  fnJoin() {
    // syntax: array.join(separator)

    console.log('Given Array is: ', this.fruits);
    let text = this.fruits.join();

    console.log('Result is :', text);
  }

  fnKeys() {
    // syntax: array.keys()

    console.log('Given Array is: ', this.fruits);

    const keys = this.fruits.keys();

    let text = "";
    for (let x of keys) {
      text += x + ' ';
    }

    console.log('Result is : ',text);
  }

  fnLength() {
    // syntax: array.length

    console.log('Given Array is: ', this.fruits);

    let length = this.fruits.length;

    console.log('Result is : ',length);
  }

  fnLastIndexOf() {
    // syntax: array.lastIndexOf(item, start)
    
    const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
    console.log('Given Array is: ', fruits);
    
    let index = fruits.lastIndexOf("Apple");

    console.log('Result is : ', index);
  }

  fnMap() {
    // syntax: array.map(function(currentValue, index, arr), thisValue)

    const persons = [
      {firstname : "Malcom", lastname: "Reynolds"},
      {firstname : "Kaylee", lastname: "Frye"},
      {firstname : "Jayne", lastname: "Cobb"}
    ];

    let result = persons.map(getFullName);
    console.log(result);

    function getFullName(item: any) {
      return [item.firstname,item.lastname].join(" ");
    }
  }

  fnPop() {
    // syntax: array.pop()

    console.log('Given Array is: ', this.fruits);

    let removed = this.fruits.pop();
    console.log('Poped element is: ', removed);
  }

  fnPush() {
    // syntax: array.push(item1, item2, ..., itemX)
    console.log('Given Array is: ', this.fruits);

    this.fruits.push("Kiwi", "Lemon");    
    
  console.log('Result array is: ',this.fruits);
  }

  fnReduce() {
    // syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    const numbers = [175, 50, 25];
    console.log('Given Array is: ', numbers);

    const result = numbers.reduce(myFunc);

    console.log('result is: ', result);

    function myFunc(total: number, num: number) {
      return total - num;
    }
  }

  fnReduceRight() {
    // syntax: array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)

    const numbers = [175, 50, 25];
    console.log('Given Array is: ', numbers);

    const result = numbers.reduceRight(myFunc);

    console.log('result is: ', result);

    function myFunc(total: number, num: number) {
      return total - num;
    }
  }

  fnReverse() {
    // syntax: array.reverse()

    console.log('Given Array is: ', this.fruits);

    let result = this.fruits.reverse();

    console.log('result is: ', result);
  }

  fnShift() {
    // syntax: array.shift()

    console.log('Given Array is: ', this.fruits);

    let result = this.fruits.shift();

    console.log('shifted element is: ', result);
    console.log(this.fruits);
  }

  fnSlice() {
    // syntax: array.slice(start, end)

    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log('Given Array is: ', fruits);

    const citrus = fruits.slice(1, 3);

    console.log('Result is: ', citrus);
  }

  fnSome() {
    // syntax: array.some(function(value, index, arr), this)

    const ages = [3, 10, 18, 20];
    console.log('Given Array is: ', ages)

    const result = ages.some(this.checkAge);
    console.log('result is :', result);
  }

  fnSort() {
    console.log('Given Array is: ', this.fruits);

    const result = this.fruits.sort();
    console.log('result array is: ', result);
  }

  fnSplice() {
    console.log('Given Array is: ', this.fruits);

    const result = this.fruits.splice(2, 2);
    console.log('result array is: ', result);
  }

  fnToString() {
    console.log('Given Array is: ', this.fruits);

    let text = this.fruits.toString();

    console.log('result is: ',text);
  }

  fnUnShift() {
    console.log('Given Array is: ', this.fruits);

    this.fruits.unshift("Lemon","Pineapple");
    console.log('result is : ', this.fruits);
  }

  fnTypeOf() {
    console.log('Given Array is: ', this.fruits);

    const myArray = this.fruits.valueOf();

    console.log('result is: ', myArray);
  }
  fnSplit() {
    let str = "Ahmedabad is nice city";
    console.log('String is: ', str);

    let newStr = str.split("", 9);

    console.log('split string is: ', newStr);
  }

}
