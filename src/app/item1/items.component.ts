import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "@nativescript/angular";
import { ItemsComponent } from "../item/items.component";

@Component({
    selector: "ns-items-1",
    templateUrl: "./items.component.html"
})
export class Items1Component {

    constructor(
      private _modal: ModalDialogService,
      private _vcRef: ViewContainerRef
    ) { }

    onTap() {
        console.log('tap');
        this._modal.showModal(ItemsComponent, {
          viewContainerRef: this._vcRef,
          fullscreen: true
        }).then(res => {

        });
    }

    onFocus() {
        console.log('focus');
    }

    onBlur() {
        console.log('blur');
    }
}
