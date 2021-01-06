import { Frame, Observable, Utils } from "@nativescript/core"
import orientation from "nativescript-orientation"

export class MainViewModel extends Observable {
    constructor(page, pageToNavigateTo) {
        super();
        this.lockFlag = false;
        this.pageToNavigateTo = pageToNavigateTo;
        this.lockElem = page.getViewById('lock');
    }

    portrait() {
        orientation.setOrientation("portrait");
        this.lockFlag = true;
        this.lockElem.text = "Unlock";
    }

    landscape() {
        orientation.setOrientation("landscape");
        this.lockFlag = true;
        this.lockElem.text = "Unlock";
    }

    lock() {
        this.lockFlag = !this.lockFlag;
        if (this.lockFlag) {
            orientation.disableRotation();
            this.lockElem.text = "Unlock";
        } else {
            orientation.enableRotation();
            this.lockElem.text = "Lock";
        }
    }

    orientation(args) {
        console.log("Orientation was changed, is Landscape?", args.landscape);
    }

    nav() {
        Frame.topmost().navigate({ moduleName: this.pageToNavigateTo, clearHistory: true });
    }

    openMT() {
        Utils.openUrl("https://master.technology");
    };
}
