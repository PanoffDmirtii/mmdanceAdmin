import {Component, OnInit} from '@angular/core';
import {ServiceSubscription} from '../../../services/service-subscription';
import {NgForm} from '@angular/forms';
import {Subscription} from '../../../subscription';
import {MailerMessageService} from '../../../services/mailer-message.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css']
})
export class MailerComponent implements OnInit {
  subscriptions: Subscription[];
  response = '';
  uploadFile = null;

  constructor(
    private serviceSubscribers: ServiceSubscription,
    private serviceMailer: MailerMessageService
  ) {
  }

  ngOnInit() {
    this.serviceSubscribers.getAudience().subscribe((values) => {
      this.subscriptions = values;
    });
  }

  disabledButton(formData: NgForm) {
    return formData.value.text === '' || formData.value.subscription === '';
  }

  onUploadFile(files) {
    this.uploadFile = files;
    console.log(files);
  }

  onSubmit(formData: NgForm) {
    if (formData.valid) {
      const data: FormData = new FormData();
      data.append(
        'data', JSON.stringify(
          {
            select_topic: formData.value.subscription,
            text: formData.value.text
          }
        )
      );
      if (this.uploadFile !== null) {
        data.append('file', this.uploadFile);
      }

      this.serviceMailer.startSendMessage(data).subscribe(resp => {
          formData.resetForm();
          this.response = resp;
        },
        error => {
          console.log(error);
          this.response = error;
        });
    }
  }
}
