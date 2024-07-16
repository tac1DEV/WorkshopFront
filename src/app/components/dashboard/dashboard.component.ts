import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  styles: [`app-login {
    button {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      border-radius: 10px;
      border: 10px solid white;
      font-weight: bold;
    }
  }`]
})
export class DashboardComponent {

  banner: any = "../../../assets/img/banner.png";
  espot: any = "../../../assets/img/espot.png";
  carroussel1: any = "../../../assets/img/carroussel1.png";
  carroussel2: any = "../../../assets/img/carroussel2.png";
  carroussel3: any = "../../../assets/img/carroussel3.png";
  navbar: any = "../../../assets/img/navbar.png";
}
