import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";

export interface IPage {
    title: string;
}

const Page = XNode.prepare<IPage>("Page");

export default Page;
