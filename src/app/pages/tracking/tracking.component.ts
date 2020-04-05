import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  request:Request[] = []; 

  constructor( private _requestService:RequestService, private router:Router, private formBuilder: FormBuilder){    
  } 

  ngOnInit(){

    this.registerForm = this.formBuilder.group({
      codeInput: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f(){ 
    return this.registerForm.controls; 
  }

  getcodeInput() {
    return this.registerForm.get('codeInput'); 
  }

  searchRequest ( text:string ){
    this.router.navigate(['/search', text ])
  }  

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    let codeInput = this.registerForm.get('codeInput').value;
    this.searchRequest(codeInput);
  } 
}
