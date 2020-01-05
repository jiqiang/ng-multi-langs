import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableLangs: string[];

  constructor(private translocoService: TranslocoService) {
    this.availableLangs = <string[]>translocoService.getAvailableLangs();
  }

  onChangeLang(event) {
    this.translocoService.setActiveLang(event.target.value);
  }
}
