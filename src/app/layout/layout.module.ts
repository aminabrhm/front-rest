import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
