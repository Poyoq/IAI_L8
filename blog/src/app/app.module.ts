{path: 'blog', component: BlogHomeComponent},


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    MapComponent,
    QuizComponent,
    NavBarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent,
    FilterPipe,
    FormsModule,
    SearchBarComponent,
    BlogHomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
