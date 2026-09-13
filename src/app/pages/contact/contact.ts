import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.html'
})
export class Contact {

  contactForm!: FormGroup;

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        '',
        [
          Validators.required
        ]
      ],

      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });

  }


  submitForm(): void {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;
    }


    this.isSubmitting = true;

    const formData = this.contactForm.value;

    console.log('Contact Form Data:', formData);


    // API call yahan karenge
    setTimeout(() => {

      this.isSubmitting = false;

      this.successMessage =
        'Your message has been sent successfully. We will get back to you soon.';

      this.contactForm.reset();

    }, 1500);

  }

}