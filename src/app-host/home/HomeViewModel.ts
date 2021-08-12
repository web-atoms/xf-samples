import { Inject } from "@web-atoms/core/dist/di/Inject";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import MenuItem from "../../service/menu-service/MenuItem";
import MenuService from "../../service/menu-service/MenuService";
import Action from "@web-atoms/core/dist/view-model/Action";

// test 4

declare var bridge;

export default class HomeViewModel extends AtomViewModel {

    @Inject
    public menuService: MenuService;

    public menus: any = null;

    public search: string;

    @Load({ init: true, watch: true })
    public async load() {
        const search = (this.search || "").toLowerCase();
        const filter = search
            ? (item: MenuItem) => item.label.toLowerCase().indexOf(search) !== -1
            : null;
        const r = [];
        for (const iterator of this.menuService.menus) {
            if (iterator.label === "Home") {
                continue;
            }
            const g = [];
            for (const child of iterator.children) {
                if (filter) {
                    if ((filter(iterator) || filter(child))) {
                        g.push(child);
                    }
                    continue;
                }
                g.push(child);
            }
            if (g.length) {
                (g as any).key = iterator;
                r.push(g);
            }
        }
        this.menus = r;
    }

    @Action()
    public async scan() {
        if (bridge.qrcodeService) {
            await bridge.qrcodeService.scanAsync();
        } else {
            throw new Error("Please update your app");
        }
    }

}
