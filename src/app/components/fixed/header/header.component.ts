import { Component, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/i-navigation';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public navigation  : INavigation[] = [];

  constructor(private _navService: NavigationService) { }

  ngOnInit(): void {
    this._navService.getNav()
    .subscribe(data => this.navigation = data);
   
  }
}
