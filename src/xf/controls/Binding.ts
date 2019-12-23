import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";

export type bindingFunction = (control: AtomXFControl) => any;

function oneTime(b: Binding, control: AtomXFControl) {
    control.runAfterInit(() => {
        const value = b.evaluate();
        control.setLocalValue(b.element, b.path, value);
    });
}

function oneWay(b: Binding, control: AtomXFControl) {
    control.bind(b.element, b.path, b.pathList , false, b.sourcePath, control);
}

function twoWays(b: Binding, control: AtomXFControl) {
    control.bind(b.element, b.path, b.pathList, false, b.sourcePath, control);
}

export default class Binding {

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
        public readonly setupFunction: ((b: Binding, c: AtomXFControl) => void),
        sourcePath: string | bindingFunction,
        public element?: any,
        public path?: string,
        ) {
        if (typeof sourcePath === "string") {
            this.sourcePath = (b) => AtomBridge.instance.getValue(this.element, sourcePath);
        } else {
            this.sourcePath = sourcePath;
        }
    }

    public evaluate() {
        return this.sourcePath(this.element);
    }

}
