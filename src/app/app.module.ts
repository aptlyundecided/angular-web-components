import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


// Angular material stuff
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

// Components
import { FoodFormComponent } from './components/food-form/food-form.component';
import { ExampleWebCompComponent } from './components/example-web-component/example-web-comp/example-web-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    ExampleWebCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,

    // Angular Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
  ],
  providers: [],
  // bootstrap: [ExampleWebCompComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const foodFormComponent = createCustomElement(
      FoodFormComponent, { injector: this.injector }
    );
    const exampleFormComponent = createCustomElement(
      ExampleWebCompComponent, { injector: this.injector }
    );
    customElements.define('app-food-form', foodFormComponent);
    customElements.define('app-example-web-comp', exampleFormComponent);
  }
}
