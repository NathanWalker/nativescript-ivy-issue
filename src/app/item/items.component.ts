import {ChangeDetectorRef, Component, OnInit} from "@angular/core";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        console.log('rearrach')
        this.cdr.reattach();
    }

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
