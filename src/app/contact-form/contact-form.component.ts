import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  contactMethod = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ]

  qualificationMethod = [
    {id: 1, name: 'MCA'},
    {id: 2, name: 'BE'},
    {id: 3, name: 'MCom'},
    {id: 4, name: 'BCA'}
  ]
  
  log(x: any) {
    console.log(x);
  }

  submit(f: any) {
    console.log(f);
  }
}
