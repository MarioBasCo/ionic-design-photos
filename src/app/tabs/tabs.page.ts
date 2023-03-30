import { NgIf } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  
  constructor() {}
}
