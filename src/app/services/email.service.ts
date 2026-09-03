import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly SERVICE_ID = 'service_9b6yi4a';
  private readonly TEMPLATE_ID = 'template_yb71r5f';
  private readonly PUBLIC_KEY = 'Q232BOA6LQJWsQiqL';

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendForm(form: HTMLFormElement): Promise<any> {
    return emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, form);
  }
}
