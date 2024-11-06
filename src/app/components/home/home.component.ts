import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from 'src/app/services/email.serivce';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private emailService: EmailService) { }

  messageForm = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    message: new FormControl('')
  })


  submit() {
    if (this.messageForm.valid) {
      let values = this.messageForm.value
      this.emailService.sendEmail(values.name || '', values.mobile || '', values.message || '').then(
        (response) => {

          if (response.status === 200) {
            alert('Email sent successfully!');
            this.messageForm.reset();
          }
        },
        (error) => {

          alert('Failed to send email. Please try again.');
        }
      );
    }
    else {
      this.messageForm.markAllAsTouched();
    }
  }
}
