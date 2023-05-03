import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { LoginAction } from 'src/app/ngrx/users/user.actions';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  loginForm!: FormGroup;
  user:User | undefined;
  error : string | undefined;
  connected : boolean = false;
constructor(private store: Store<any>, private router: Router, private authenticationService: AuthenticationService, private formBuilder : FormBuilder){
  //this.user = this.authService.getUsers();
  this.connected = authenticationService.isConnected();
  this.loginForm = this.formBuilder.group({
    email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password : ['', [Validators.required]]
  })
}
  ngOnInit(): void {
    this.user = new User("","");
  }
onLogin(form: FormGroup): void {
 if(form.valid){
  this.authenticationService.login(form.value.email).subscribe({
    next : (data) => {
        this.user = data[0];
        if(this.user.email == form.value.email && this.user.password == form.value.password){
            
            console.log(this.user);
            this.router.navigateByUrl('aircrafts');
        }
        else this.error = "Email or Password incorrecte"; 
      },
    error : (err) => this.error = err.message,  //pb sur la requete
    complete : () => console.log("Welcome")
  })
}
else this.error = 'Erreur de saisie';
}

onSubmit(u : any){
  console.log(u);
}
}
