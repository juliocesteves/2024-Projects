import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NewsFormComponent } from '../news-form/news-form.component';
import { WidgetInformationComponent } from '../widget-information/widget-information.component';
import { AppFooterComponent } from "../app-footer/app-footer.component";
import { SocialServiceService } from '../../services/social-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsFormComponent,
    WidgetInformationComponent,
    AppFooterComponent
],
  providers: [SocialServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

	constructor(private socialService: SocialServiceService) { }

	openKipperWebsite() {
		this.socialService.openKipperWebsite();
	}
}
