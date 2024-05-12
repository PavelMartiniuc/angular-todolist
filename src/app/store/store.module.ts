import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 
import { FormsModule } from "@angular/forms"; 
import { ModelModule } from "../model/model.module"; 
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./directives/counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@NgModule({
 imports: [ModelModule, BrowserModule, FormsModule, FontAwesomeModule],
 declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
 exports: [StoreComponent]
})
export class StoreModule { }