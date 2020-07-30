import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import ICustomer from "../model/ICustomer";

export default class RowEditorViewModel extends AtomWindowViewModel {

    public model: ICustomer = {};

    public save() {
        this.close(this.model);
    }

}
