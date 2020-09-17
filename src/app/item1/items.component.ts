import { Component } from "@angular/core";

@Component({
    selector: "ns-items-1",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class Items1Component {

    constructor() { }

    onTap() {
        console.log('tap');
    }

    onFocus() {
        console.log('focus');
    }

    onBlur() {
        console.log('blur');
    }
}
