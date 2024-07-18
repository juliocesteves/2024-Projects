import { NgOptimizedImage } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'widget-information',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './widget-information.component.html',
  styleUrl: './widget-information.component.scss'
})
export class WidgetInformationComponent {
	@Input() path: string = '';
	@Input() title: string = '';
	@Input() description: string = '';
}
