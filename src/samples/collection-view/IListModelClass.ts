interface IListModel {
    image?: string;
    name?: string;
    location?: string;
}
interface IGroupModel {
    name?: string;
    list?: IListModel[];
}
