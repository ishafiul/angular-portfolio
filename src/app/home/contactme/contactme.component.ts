import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SendMailService} from "./send-mail.service";
import {data} from "autoprefixer";
import {SendMessagePayload} from "../../types/send_mail";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  messageSend: boolean = false;
  isLoading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private senMail: SendMailService,
  ) {
  }

  ngOnInit(): void {
    this.isLoading = false
    this.messageSend = false
  }


  sendMessage: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });


  sendMail(){
    if (!this.sendMessage.invalid) {
      this.isLoading = true;
      this.senMail.send(<SendMessagePayload>{
        message: this.sendMessage.value.message.toString(),
        name: this.sendMessage.value.fname.toString() + " " + this.sendMessage.value.lname.toString() ,
        sender: this.sendMessage.value.email.toString(),
        subject: this.sendMessage.value.subject.toString(),
      })
        .subscribe((res)=>{
          if (res.message === 'Message Send!') {
            this.isLoading = false;
            this.sendMessage.reset()
            this.messageSend = true;
            for (let control in this.sendMessage.controls) {
              this.sendMessage.controls[control].setErrors(null);
            }
            setTimeout(()=>{
              this.messageSend = false;
            },5000)
          }
        });
    }
  }
}

