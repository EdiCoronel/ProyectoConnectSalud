import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { first } from 'rxjs/operators'
import { AuthStateService } from '../../services/auth-state.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  
  myform: FormGroup;

  constructor( private authService: AuthService, private authStateService: AuthStateService ) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    };

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    console.log(this.myform.value);
    this.authService.login( this.f['username'].value, this.f['password'].value )
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        console.log(data.token);
        this.authStateService.setToken(data.token);
      },
      error => {
        console.log(error);
      }
    )
  }

  }
