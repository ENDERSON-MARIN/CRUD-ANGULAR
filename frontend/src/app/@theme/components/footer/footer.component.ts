import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Creado con ♥ para <b><a href="https://www.Hercaspublicidad.com" target="_blank">Hercas Publicidad</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-instagram"></a>
      <a href="#" target="_blank" class="ion ion-social-youtube"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
