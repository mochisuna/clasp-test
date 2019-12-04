export class Properties {
    private sheetID: string;
    private accessToken: string;
    private channelID: string;
    constructor() {
        this.sheetID = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
        this.accessToken = PropertiesService.getScriptProperties().getProperty("ACCESS_TOKEN");
        this.channelID = PropertiesService.getScriptProperties().getProperty("CHANNEL_ID");
    }
    public getSheetID(): string {
        return this.sheetID;
    }
    public getAccessToken(): string {
        return this.accessToken;
    }
    public getChannelID(): string {
        return this.channelID;
    }
}
