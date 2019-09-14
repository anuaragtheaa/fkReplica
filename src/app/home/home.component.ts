import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  phones;
  titles = ['Deal of the Day', 'Hot Deals', 'Top Selection'];

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.indexService.getSlide()
      .subscribe(phone => {
        this.phones = phone;
        console.log(phone);
      });
  }

  snackBar() {
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  }

}
