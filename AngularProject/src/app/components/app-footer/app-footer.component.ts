import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SocialServiceService } from '../../services/social-service.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [SocialServiceService],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {

	constructor(private socialService: SocialServiceService) { }

	facebookRedirect(): void {
		this.socialService.openSocialMedia('https://www.facebook.com/juliocesar188');
	}

	instagramRedirect(): void {
		this.socialService.openSocialMedia('https://www.instagram.com/julioc.esteves/');
	}
}
