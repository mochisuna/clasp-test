import { Properties } from "./model/properties";
import { Slack } from './model/slack';

function main() {
    const p = new Properties();
    this.sheets = SpreadsheetApp.openById(p.getSheetID()).getSheets();
    // とりあえず全部で何行あるかを確認する
    const indexColumns = this.sheets[0].getRange('A:A').getValues();
    const lastRow = indexColumns.filter(String).length;

    // 値が存在する範囲で末端までの全要素を出す
    const values = this.sheets[0].getRange(1, 1, lastRow, 1).getValues();

    const slack = new Slack(p.getAccessToken(), p.getChannelID());
    slack.post('今が旬の課題です');
    for (let val of values) {
        slack.post(val[0]);
    }
    Logger.log("Done.")
}
