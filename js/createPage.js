import ChannelData from "./channel-data.js";
import Section from "./section.js";

export default class PageController {
    constructor(sources) {
        this.sources = sources;
    }

    getNews() {
        return this.getCheckedChannels().forEach(channel => {
            let channelData = new ChannelData(channel);
            channelData.getData()
                .then(data => new Section([], data))
                .then(section => section.addArticlesSectionToView())

        });
    }

    renderPage() {
        let section = new Section(this.sources);
        section.addSourcesSectionToView();
    }


    getCheckedChannels() {
        return Array.from(document.forms[0].elements).filter(resource => resource.checked).map(channel => channel.value);
    }
}