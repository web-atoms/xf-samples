import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import countries from "../../model/countries";

export default class ChipsSampleViewModel extends AtomViewModel {

    public list = [];

    public countries = null;

    public selectedCountries = [];

    public search: string;

    @Load({ init: true, watch: true })
    public loadStart() {
        const s = this.search;
        if (s) {
            this.countries = countries.filter((c) => c.label.indexOf(s) !== -1);
        } else {
            this.countries = null;
        }
    }

}
