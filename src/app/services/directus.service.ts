// services/directus.service.ts
import { Injectable } from '@angular/core';
import { createDirectus, rest, readItems } from '@directus/sdk';
import { Pages } from '../models/pages';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  private apiUrl = environment.apiUrl;

  private directus = createDirectus(this.apiUrl).with(rest());

  constructor() {}

  async getAllFields(): Promise<any> {
    try {
      const fields = await this.directus.request(
        readItems('pages_block', {
          fields: ['*'],
        })
      );
      return fields;
    } catch (error) {
      console.error('Error fetching fields:', error);
      return null;
    }
  }

  async getAllCollections(): Promise<any> {
    try {
      const collections = await this.directus.request(
        readItems('pages', {
          fields: ['*'],
        })
      );
      return collections;
    } catch (error) {
      console.error('Error fetching collections:', error);
      return null;
    }
  }

  async getPageBySlug(slug: string): Promise<Pages | null> {
    try {
      const response = await this.directus.request<Pages[]>(
        readItems('pages', {
          filter: {
            slug: { _eq: slug },
          },
          fields: [
            '*',
            {
              block: [
                '*',
                {
                  item: {
                    HeroBlock: ['*'],
                    RichTextBlock: ['*'],
                  },
                },
              ],
            },
          ],
          limit: 1,
        })
      );

      return response[0];
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  }

  getImageUrl(fileId: string) {
    return `${this.apiUrl}assets/${fileId}`;
  }
}
