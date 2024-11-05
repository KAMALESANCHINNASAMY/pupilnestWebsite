import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor() { }

    sendEmail(name: string, mobile: string, message: string): Promise<EmailJSResponseStatus> {
        emailjs.init('bvXQO9PMohLzG_9rA');
        return emailjs.send("service_2otetkm", "template_hm7c6yr", {
            from_name: name,
            to_name: "Pupil Nest",
            mobile_number: mobile,
            message: message
        });
    }
}
