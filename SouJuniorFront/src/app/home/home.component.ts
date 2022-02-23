import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.securityService.chargeUser();
  }

  dynamicSlides = [
    {
      id: 1,
      src:'../assets/imagens/carousel/Alicerce.png',
      alt:'Side 1',
      title:'Side 1',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    },
    {
      id: 2,
      src:'../assets/imagens/carousel/CampusII.png',
      alt:'Side 2',
      title:'Side 2',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    },
    {
      id: 3,
      src:'../assets/imagens/carousel/impact.png',
      alt:'Side 3',
      title:'Side 3',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    },
    {
      id: 4,
      src:'../assets/imagens/carousel/porte.png',
      alt:'Side 4',
      title:'Side 4',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    },
    {
      id: 5,
      src:'../assets/imagens/carousel/proAquaJr.png',
      alt:'Side 5',
      title:'Side 5',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    },
    {
      id: 6,
      src:'../assets/imagens/carousel/TechVet.png',
      alt:'Side 5',
      title:'Side 5',
      desc:'Some quick example text to build on the card title and make up the bulk of the content.'
    }
  ]

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      480 : {
        items: 2
      },
      768 : {
        items: 3
      },
      1000: {
        items: 4
      }
    },
  }
}
