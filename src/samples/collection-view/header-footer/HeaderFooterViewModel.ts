import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class HeaderFooterViewModel extends AtomViewModel {
    public list: IListModel[] = [];

    public async init(): Promise<any> {
        super.init();

        for (let i = 0; i <= 6; i += 1) {
            const element: IListModel = {};
            element.image = "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Papio_anubis_%28Serengeti%2C_2009%29.jpg/200px-Papio_anubis_%28Serengeti%2C_2009%29.jpg";
            element.location = "location " + i;
            element.name = "name " + i;
            this.list.add(element);
        }
    }
}
