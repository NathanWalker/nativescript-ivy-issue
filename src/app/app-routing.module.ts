import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { Items1Component } from "./item1/items.component";

const routes: Routes = [
    { path: "", redirectTo: "/items2", pathMatch: "full" },

    { path: "items1", component: ItemsComponent },
    { path: "items2", component: Items1Component }
];

// export const NRM = NativeScriptRouterModule.forRoot(routes);

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
