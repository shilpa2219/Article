import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private obj:AngularFirestore) { }

  saveDetails(user:User){
    console.log("inside service ",user)
    this.obj.collection("userdata").add({...user})
  }
  readDetails(){
    return this.obj.collection("userdata").snapshotChanges() 
  }
  updateDetails(user){
    this.obj.doc("userdata/"+user.did).update({...user})
   }
  deleteDetails(user){
    this.obj.doc("userdata/"+user.did).delete()
  }
}
