import { Component, Input } from '@angular/core';
import { IAboutFood } from 'src/app/interfaces/i-about-food';

@Component({
  selector: 'app-about-food',
  templateUrl: './about-food.component.html',
  styleUrls: ['./about-food.component.css']
})
export class AboutFoodComponent {
  @Input() aboutData: IAboutFood;
}
