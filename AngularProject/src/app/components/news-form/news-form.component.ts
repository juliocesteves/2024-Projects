import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'news-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
	newsForm!: FormGroup;
	loading = signal(false);

	constructor(private newsletterService: NewsletterService) {
		this.newsForm = new FormGroup({
			name: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
		});
  	}

	onSubmit() {
		this.loading.set(true);
		if (this.newsForm.valid) {
			this.newsletterService.sendData(this.newsForm.value.name, this.newsForm.value.email).subscribe({
				next: () => {
					this.newsForm.reset();
				},
				error: () => {
					console.error('There is an error in our application');
				},
				complete: () => {
					this.loading.set(false);
				}
			});
		}
	}
}
