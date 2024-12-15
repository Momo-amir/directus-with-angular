import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextBlock } from '../../models/blocks';

@Component({
  selector: 'app-rte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rte.component.html',
  styleUrl: './rte.component.scss',
})
export class RteComponent {
  @Input() block!: RichTextBlock;
}
