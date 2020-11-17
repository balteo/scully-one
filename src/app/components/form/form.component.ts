import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({Id: [42], Customer: ['Julien'], Quantity: ['2'], Price: ['12']});
  }


  onSubmit(formValue: any): void {
    this.http.post('https://httpbin.org/post', formValue).subscribe(console.log);
  }

}
