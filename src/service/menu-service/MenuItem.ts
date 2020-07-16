import { App } from "@web-atoms/core/dist/App";
import { AtomList } from "@web-atoms/core/dist/core/AtomList";
import { INameValuePairs } from "@web-atoms/core/dist/core/types";
import MenuService from "./MenuService";

export interface IType {
    class: any;
    extension: string;
}

export function asView(a: any): IType {
    return {
        class: a,
        extension: ".html"
    };
}

export function asClass(a: any): IType {
    return {
        class: a,
        extension: ".ts"
    };
}

export default class MenuItem {

    public enabled: boolean;

    public expand: boolean;

    public label: string;

    public icon: string;

    public children: AtomList<MenuItem>;

    public action: (menuItem: MenuItem) => any;

    public require: any = null;

    constructor(
        public readonly app: App,
        public readonly menuService: MenuService
    ) {
        this.enabled = true;
        this.children = new AtomList();
    }

    public click(fromHome?: boolean): any {
        // this is hack as MasterDetailPage's IsPresented is set only property
        if (!fromHome) {
            this.menuService.isOpen = true;
        }
        const r = this.action(this);
        this.menuService.isOpen = false;
        return r;
    }

    public add(label: string, action: () => any, icon?: string): MenuItem {
        const m = this.menuService.create(label, action, icon);
        this.children.add(m);
        return m;
    }

    public addGroup(
        label: string,
        icon?: string,
        require?: any): MenuItem {
        const m = this.menuService.createGroup(label, icon);
        m.require = require;
        this.children.add(m);
        return m;
    }

    public addLink(label: string, pageSrc: string | any, pageParameters?: INameValuePairs, icon?: string): MenuItem {
        const m = this.menuService.createLink(label, pageSrc, pageParameters, icon);
        this.children.add(m);
        return m;
    }

    public addTabLink(
        label: string,
        pageSrc: string | any,
        pageParameters?: INameValuePairs,
        icon?: string): MenuItem {
        const m = this.menuService.createLink(label, pageSrc, pageParameters, icon, { target: "app" });
        this.children.add(m);
        return m;
    }

    public toString() {
        return this.label;
    }

}
