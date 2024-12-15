import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DirectusService } from './services/directus.service';
import { MenuComponent } from './component/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'directus-with-angular';

  constructor(private directusService: DirectusService) {}

  ngOnInit(): void {
    console.log('AppComponent initialized with directus');
    this.fetchAllFields();
    this.fetchAllCollections();
  }

  async fetchAllFields() {
    const fields = await this.directusService.getAllFields();
    console.log('All fields:', fields);
  }

  async fetchAllCollections() {
    const collections = await this.directusService.getAllCollections();
    console.log('All collections:', collections);
  }
}
