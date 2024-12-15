import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectusService } from '../../services/directus.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  menu: Menu | null = null;

  constructor(private directusService: DirectusService) {}

  ngOnInit() {
    this.loadMenu();
  }

  private async loadMenu() {
    // Add getMenu method to DirectusService
    this.menu = await this.directusService.getMenu();
  }
}
