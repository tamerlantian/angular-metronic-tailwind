import { CommonModule } from '@angular/common';
import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input({ required: true }) nombre: string;
  @Input() contenedorNombre: string;
  @Input({ required: true }) menuItems: any[];
  @Input() imagen: string;
}
