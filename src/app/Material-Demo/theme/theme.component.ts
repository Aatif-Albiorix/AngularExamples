import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
@Component({
  selector: 'theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  firstFormGroup !: FormGroup;
  secondFormGroup !: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
  }
  selectedValue: string | undefined;
  
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOption = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ]

  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }
  dateFilter = (d: Date | null): boolean=> {
    const day = (d || new Date()).getDay();
    return day != 0 && day != 6; 
  }
  openSnackBar(msg: string, action: any) {
    let snackBarRef = this.snackBar.open(msg, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('Snack bar was deleted');
    })

    snackBarRef.onAction().subscribe(() => {
      console.log('snackbar action was triggered!!');
    })
  }

  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 2000});
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Vishwas'}});
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Result:  ${result}`);
    })
  }
  
}

@Component({
  selector: 'custom-snackbar',
  template: '<span style="color: orange">Custom SnackBar</span>'
})
export class CustomSnackBarComponent {

}
//   notification = 2;

//   color: ThemePalette = 'primary';
//   mode: ProgressBarMode = 'determinate';
//   value = 50;
//   bufferValue = 75;

//   opened = false;

//   log(state: any) {
//     console.log(state);
//   }

//   logChange(index: any) {
//     console.log(index);
//   }

//   links = ['First', 'Second', 'Third'];
//   activeLink = this.links[0];
//   background: ThemePalette = undefined;

//   toggleBackground() {
//     this.background = this.background ? undefined : 'primary';
//   }

//   addLink() {
//     this.links.push(`Link ${this.links.length + 1}`);
//   }
//   remove(index: number) {
//     this.links.splice(index, 1);
//   }
// }
