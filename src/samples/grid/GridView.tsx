import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class GridView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.Grid Margin="20,35,20,20">
                    <XF.Grid.columnDefinitions>
                        <XF.ColumnDefinition Width="0.5*" />
                        <XF.ColumnDefinition Width="0.5*" />
                    </XF.Grid.columnDefinitions>
                    <XF.Grid.rowDefinitions>
                        <XF.RowDefinition Height="50" />
                        <XF.RowDefinition Height="50" />
                    </XF.Grid.rowDefinitions>
                    <XF.Label Text="Column 0, Row 0" />
                    <XF.Label {... XF.Grid.column(1)}
                        Text="Column 1, Row 0" />
                    <XF.Label {... XF.Grid.row(1)}
                        Text="Column 0, Row 1" />
                    <XF.Label {...XF.Grid.column(1)}
                        {...XF.Grid.row(1)}
                        Text="Column 1, Row 1" />
                </XF.Grid>
            </XF.ContentPage>
        );
    }
}
