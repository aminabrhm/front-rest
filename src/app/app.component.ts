import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'front-rest';

  ngOnDestroy(){
  }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event: any) {
      return localStorage.clear();
  }
  
}
