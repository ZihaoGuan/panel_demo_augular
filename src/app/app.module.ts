import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgentItemComponent } from './pages/agent/components/agent-item/agent-item.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AgentComponent } from './pages/agent/agent.component';
import { HomeComponent } from './pages/home/home.component';
import { CruiseComponent } from './pages/cruise/cruise.component';
import { HelpComponent } from './pages/help/help.component';
import { TypeTabComponent } from './pages/agent/components/type-tab/type-tab.component';
import { OsIconComponent } from './pages/agent/components/os-icon/os-icon.component';
import { PopupDialogComponent } from './pages/agent/components/popup-dialog/popup-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentItemComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    AgentComponent,
    HomeComponent,
    CruiseComponent,
    HelpComponent,
    TypeTabComponent,
    OsIconComponent,
    PopupDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
