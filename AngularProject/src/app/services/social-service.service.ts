import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {

	constructor() { }

	openSocialMedia(url: string): void {
		window.open(url, "_blank");
	}

	openKipperWebsite() {
		window.open("https://www.fernandakipper.com/", "_blank");
	}
}
