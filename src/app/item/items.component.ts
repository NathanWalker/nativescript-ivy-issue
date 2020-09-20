import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor(private cdr: ChangeDetectorRef, private _params: ModalDialogParams) { }

    ngOnInit() {
        // console.log('rearrach')
        // this.cdr.reattach();
    }

    onTap() {
        if (this._params) {
          this._params.closeCallback();
        }
    }

    onFocus() {
        console.log('focus');
    }

    onBlur() {
        console.log('blur');
    }

    change(args) {
      console.log('change:', args.object.text);
    }

    loaded(args) {
      console.log('loaded:', args.object);
    }

    unloaded(args) {
      console.log('unloaded:', args.object);
    }
}
