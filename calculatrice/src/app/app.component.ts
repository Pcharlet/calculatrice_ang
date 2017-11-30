import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private $saisie: string = " ";


  saisie( value: string ) {
    this.$saisie = this.$saisie + value;

  }

  reset() {
    this.$saisie = " ";
  }


  egale() {
    this.$saisie = eval(this.$saisie);

  }

}
