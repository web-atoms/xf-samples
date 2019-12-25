import XNode from "@web-atoms/core/dist/core/xnode/XNode";

export interface IPage {
    title: string;
}

const ContentPage = XNode.prepare<IPage>("ContentPage");

export default ContentPage;
