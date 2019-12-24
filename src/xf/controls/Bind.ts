import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import * as ExpressionParser from "@web-atoms/core/dist/core/ExpressionParser";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";

export type bindingFunction = (control: AtomXFControl) => any;

function oneTime(name: string, b: Binding, control: AtomXFControl, e: any) {
    b.path = name;
    b.element = e;
    control.app.callLater(() => {
        control.setLocalValue(b.element, b.path, b.sourcePath(control));
    });
}

function event(name: string, b: Binding, control: AtomXFControl, e: any) {
    b.path = name;
    b.element = e;
    control.app.callLater(() => {
        control.bindEvent(b.element, b.path, b.sourcePath as any);
    });
}

function oneWay(name: string, b: Binding, control: AtomXFControl, e: any) {
    b.path = name;
    b.element = e;
    control.app.callLater(() => {
        control.bind(b.element, b.path, b.pathList , false, null);
    });
}

function twoWays(name: string, b: Binding, control: AtomXFControl, e: any) {
    b.path = name;
    b.element = e;
    control.app.callLater(() => {
        control.bind(b.element, b.path, b.pathList, true, null);
    });
}

export default class Binding {
    // tslint:disable-next-line: ban-types
    public static event(sourcePath: any): any {
        return new Binding(event, sourcePath);
    }

    public static oneTime(sourcePath: string | bindingFunction): Binding {
        return new Binding(oneTime, sourcePath);
    }

    public static oneWay(sourcePath: bindingFunction): Binding {
        return new Binding(oneWay, sourcePath);
    }

    public static twoWays(sourcePath: bindingFunction): Binding {
        return new Binding(twoWays, sourcePath);
    }

    public readonly sourcePath: bindingFunction;

    public readonly pathList: string[][];

    constructor(
        public readonly setupFunction: ((name: string, b: Binding, c: AtomXFControl, e: any) => void),
        sourcePath: string | bindingFunction,
        public element?: any,
        public path?: string,
        ) {
        if (typeof sourcePath === "string") {
            this.sourcePath = (b) => AtomBridge.instance.getValue(this.element, sourcePath);
        } else {
            this.sourcePath = sourcePath;
        }

        if (Array.isArray(this.sourcePath)) {
            this.pathList = this.sourcePath as any;
            // this.setupFunction = null;
        } else {
            this.pathList = ExpressionParser.parsePath(this.sourcePath);
            // this.sourcePath = null;
        }

    }

}
