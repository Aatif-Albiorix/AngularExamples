import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  form = new FormGroup({
    topics: new  FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(index: number) {
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}

// FormBuilder Implementation

// form = new FormGroup({
//   name: new FormControl(),
//   contact: new FormGroup({
//     email: new FormControl(),
//     phone: new FormControl()
//   }),
//   topics: new FormArray([])
// });

// export class NewCourseFormComponentComponent {
//   form;
// constructor(fb: FormBuilder){
//     this.form = fb.group({
//       name: ['',Validators.required],
//       contact: fb.group({
//         email: [],
//         phone: []
//       }),
//       topics: fb.array([])
//     });
// }
// }