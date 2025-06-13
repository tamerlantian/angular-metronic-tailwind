import { Component, HostBinding } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @HostBinding('class') hostClass =
    'sidebar dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed z-20 hidden lg:flex flex-col items-stretch shrink-0';
  @HostBinding('attr.data-drawer') drawer = 'true';
  @HostBinding('attr.data-drawer-class') drawerClass =
    'drawer drawer-start top-0 bottom-0';
  @HostBinding('attr.data-drawer-enable') drawerEnable = 'true|lg:false';
  @HostBinding('attr.id') id = 'sidebar';

  public sidebarMenu: any[] = [
    {
      nombre: 'Inicio',
      link: '/dashboard',
      iconoClase: 'ki-filled ki-home',
      activo: false,
    },
    {
      nombre: 'Administración',
      link: '',
      iconoClase: 'ki-filled ki-setting-2',
      activo: false,
      tipoAcordion: true,
      children: [
        {
          nombre: 'Vehículos',
          link: '/administracion/vehiculo/lista',
        },
        {
          nombre: 'Contactos',
          link: '/administracion/contacto/lista',
        },
        {
          nombre: 'Franjas',
          link: '/administracion/franja/lista',
        },
      ],
    },
  ];

  isActive(link: string): boolean {
    // return this.router.url === link;
    return false;
  }
}
