import { Component, OnInit } from '@angular/core';
import { Menu } from './types/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showSideBar: boolean = false;

  menus: Menu[] = [
    {
      name: 'Administration',
      iconClass: 'fas fa-desktop',
      active: false,
      submenu: [
        { name: 'Portfolio', url: '/administration/portfolio' },

      ],
    },
    // {
    //   name: "Marché",
    //   iconClass: 'fas fa-user-friends',
    //   active: false,
    //   submenu: [
    //     { name: 'Valeurs', url: '#' },
    //     { name: 'Indices boursiers', url: '#' },
    //     { name: 'Devise', url: '#' },
    //     { name: 'Tableau de valeurs', url: '#' }
    //   ],
    // },
    // {
    //   name: "Dta",
    //   iconClass: 'fas fa-user-friends',
    //   active: false,
    //   submenu: [
    //     { name: 'Création formulaire', url: '#' },
    //     { name: 'Suppression formulaire', url: '#' },
    //     { name: 'Suivi formulaire', url: '#' }
    //   ],
    // },
    // {
    //   name: "Portefeuille",
    //   iconClass: 'fas fa-user-friends',
    //   active: false,
    //   submenu: [
    //     { name: 'Titre en portefeuille', url: '#' },
    //     { name: 'Mouvements titres', url: '#' },
    //     { name: 'Echéancier', url: '#' },
    //     { name: 'Opérations sur titres', url: '#' }
    //   ],
    // },
    // {
    //   name: "Ordres",
    //   iconClass: 'fas fa-user-friends',
    //   active: false,
    //   submenu: [
    //     { name: 'Ordres en note', url: '#' },
    //     { name: 'Simulation', url: '#' },
    //     { name: 'Nouvel ordre', url: '#' },
    //     { name: 'Opération du jour', url: '#' },
    //     { name: 'Archive ordres', url: '#' },
    //     { name: 'Archive bordereaux', url: '#' }
    //   ],
    // },
    // {
    //   name: "Transferts",
    //   iconClass: 'fas fa-user-friends',
    //   active: false,
    //   submenu: [
    //     { name: 'Transfert interne', url: '#' },
    //     { name: 'Transfert externe', url: '#' },
    //     { name: 'Transfert du client', url: '#' }
    //   ],
    // },
  ]

  ngOnInit() {}

  toggle(index: number) {
    this.menus[index].active = !this.menus[index].active;
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }

  selectMenu(parentMenu: { name: string }) : void {

    this.menus.forEach(menu => {
      if (menu.name !== parentMenu.name) {
        menu.active = false;
      } else {
        menu.active = !menu.active;
      }
    })
   
  }

}
