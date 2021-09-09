import { CancelToken } from "@web-atoms/core/dist/core/types";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import countries from "../../model/countries";

export default class ChoiceViewSampleViewModel extends AtomViewModel {

    public search: string = "";

    public countries: any [];

    public selectedCountry = null;

    @Load({ init: true, watch: true })
    public async loadStart(ct: CancelToken) {
        if (ct.cancelled) {
            return;
        }
        const s = this.search;
        if (s) {
            this.countries = countries.filter((c) => c.label.indexOf(s) !== -1);
        } else {
            this.countries = countries;
        }
        if (this.countries.length > 0) {
            // tslint:disable-next-line: no-string-literal
            this.selectedCountry = this["selectedCountry"] || this.countries[0];
        }
    }

}
