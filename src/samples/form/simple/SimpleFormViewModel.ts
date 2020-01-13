import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel, Validate } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class SimpleFormViewModel extends AtomViewModel {

    public model: any = {
        username: "",
        password: ""
    };

    @Validate
    public get errorUsername() {
        return this.model.username ? "" : "Username is required";
    }

    @Validate
    public get errorPassword() {
        return this.model.password ? "" : "Password is required";
    }

    @Action({ validate: true })
    public async signup() {
        // nothing
    }
}
