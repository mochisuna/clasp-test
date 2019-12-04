declare let SlackApp: SlackApp;

interface SlackAppAPI {
    postMessage(channelId: string, message: string): void;
}

interface SlackApp {
    create(token: string): SlackAppAPI;
}

export class Slack {
    private slack: SlackAppAPI;
    private channelID: string;

    constructor(accessToken: string, channelID: string) {
        this.slack = SlackApp.create(accessToken);
        this.channelID = channelID;
    }

    public post(message): void {
        this.slack.postMessage(this.channelID, message);
    }
}
