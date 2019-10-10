import { Component } from '@angular/core';
import { CreatePayload } from './models/create-payload';
import { UserServices } from './services/user-services';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  constructor(private userServices: UserServices) { }

  ProjectName: string;
  ProjectDescription: string;
  CurrentInvesmentAmount: string;
  category: string;
  username: string;

  submit() {
    const payload: CreatePayload = {
      ProjectName: this.ProjectName,
      ProjectDescription: this.ProjectDescription,
      CurrentInvesmentAmount: this.CurrentInvesmentAmount,
      category: this.category,
      username: this.username,
    }

    console.info(payload);
    this.userServices.create(payload).subscribe(
      result=>{},
      error=>{}
    );
  }

}
