import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MoviesPage } from '../movies/movies';
import { RecentlyaddedPage } from '../recentlyadded/recentlyadded';
@Component({
  templateUrl: 'tabs.html',
  styles: ['./tabs.scss']
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviesPage;
  tab3Root = RecentlyaddedPage;
 
  constructor() {

  }
}
