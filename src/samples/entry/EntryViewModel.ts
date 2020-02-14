import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class EntryViewModel extends AtomViewModel {

    public model: any = {
        username: "",
        password: ""
    };
}