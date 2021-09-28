import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XFEssentials from "../../clr/XFEssentials";

export default class Essentials extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage>
            <XF.Button
                text="Pick and Display"
                command={() => this.app.runAsync(() => this.open())}
                />
        </XF.ContentPage>);
    }

    public async open() {
        const file = await XFEssentials.FilePicker.pickAsync();
        const rf = new XFEssentials.ReadOnlyFile(file.fullPath);
        const r = new XFEssentials.OpenFileRequest(file.fileName, rf);
        await XFEssentials.Launcher.openAsync(r);
    }

}
