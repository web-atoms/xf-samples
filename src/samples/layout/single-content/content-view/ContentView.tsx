import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomContentView from "@web-atoms/xf-controls/dist/AtomContentView";
import XF from "@web-atoms/xf-controls/dist/clr/XF";

export default class ContentView extends AtomContentView {

    public create() {
        this.render(
            <XF.ContentView backgroundColor={Colors.grey}>
                <XF.StackLayout padding={10} backgroundColor={Colors.white}>
                    <XF.Label text="Item 1" fontSize={20} />
                    <XF.Label text="Item 2" fontSize={20} />
                    <XF.Label text="Item 3" fontSize={20} />
                    <XF.Label text="Item 4" fontSize={20} />
                    <XF.Label text="Item 5" fontSize={20} />
                </XF.StackLayout>
            </XF.ContentView>
        );
    }
}
