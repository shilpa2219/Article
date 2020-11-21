import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model=new User()
  submit=false

  constructor(private service:RegistrationService) { }

  userlist:User[];

  ngOnInit(): void {
    this.service.readDetails().subscribe(data=>{
      console.log("Data Received.........",data)
      this.userlist=data.map((doc)=>{
        return{
          did:doc.payload.doc.id,
          ...doc.payload.doc.data() as{}
        } as User
      })
    })
  }
  save(){
    this.submit=true
    console.log(this.model)  
    if(this.model.did==null){
      this.service.saveDetails(this.model)
    }else{
     this.service.updateDetails(this.model)
    }
  }

  resetForm(myform) {
   
      myform.form.reset();
   
    
} 

  edit(user){
    this.model=user
  }
  delete(user){
    this.service.deleteDetails(user)
  }
}