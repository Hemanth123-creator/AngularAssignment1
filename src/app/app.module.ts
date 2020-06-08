import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews/reviews.component';
import { ReviewAssociateComponent } from './reviews/ReviewAssociate/ReviewAssociate.component';
import { AppRoutingModule } from './app-routing.module';
import { AssociateDetailsComponent } from './reviews/AssociateDetails/AssociateDetails.component';


@NgModule({
  declarations: [
    AppComponent,
      ReviewsComponent,
      ReviewAssociateComponent,
      AssociateDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
