import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import * as ExpressionParser from "@web-atoms/core/dist/core/ExpressionParser";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";

/**
 * Bindings needs to be cloned...
 */

export type bindingFunction = (control: AtomXFControl) => any;

function oneTime(name: string, b: Bind, control: AtomXFControl, e: any) {
    control.app.callLater(() => {
        control.setLocalValue(e, name, b.sourcePath(control));
    });
}

function event(name: string, b: Bind, control: AtomXFControl, e: any) {
    control.app.callLater(() => {
        control.bindEvent(e, name, b.sourcePath as any);
    });
}

function oneWay(name: string, b: Bind, control: AtomXFControl, e: any) {
    control.app.callLater(() => {
        control.bind(e, name, b.pathList , false, null);
    });
}

function twoWays(name: string, b: Bind, control: AtomXFControl, e: any) {
    control.app.callLater(() => {
        control.bind(e, name, b.pathList, true, null);
    });
}

export default class Bind {
    // tslint:disable-next-line: ban-types
    public static event(sourcePath: any): any {
        return new Bind(event, sourcePath);
    }

    public static oneTime(sourcePath: bindingFunction): Bind {
        return new Bind(oneTime, sourcePath);
    }

    public static oneWay(sourcePath: bindingFunction): Bind {
        return new Bind(oneWay, sourcePath);
    }

    public static twoWays(sourcePath: bindingFunction): Bind {
        return new Bind(twoWays, sourcePath);
    }

    public readonly sourcePath: bindingFunction;

    public readonly pathList: string[][];

    constructor(
        public readonly setupFunction: ((name: string, b: Bind, c: AtomXFControl, e: any) => void),
        sourcePath: bindingFunction
        ) {
        this.sourcePath = sourcePath;

        if (Array.isArray(this.sourcePath)) {
            this.pathList = this.sourcePath as any;
            // this.setupFunction = null;
        } else {
            this.pathList = ExpressionParser.parsePath(this.sourcePath);
            // this.sourcePath = null;
        }

    }

}
