export interface IHighlight {
    title: string,
    competition: string,
    thumbnail: string,
    date: string,
    visible: boolean,
    videos: [
        {
            id: string,
            title: string,
            embed: string,
        }
    ]
}
