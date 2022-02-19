import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureAModule } from './feature-a/feature-a.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FeatureAModule
  ],
  providers: [
    {
      provide: 'AnyNameHere', useFactory: () => { 
        return {
          testMethod: () => {
            console.log('Hello, World' );
          }
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
