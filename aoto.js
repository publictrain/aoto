
const LINE_CHANNEL_ACCESS_TOKEN = '';
// ここはアクセストークンをホントは入れる
function doPost(e){
 var json = JSON.parse(e.postData.contents);
 var UID = json.events[0].source.userId;
 var GID = json.events[0].source.groupId;
  
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 sheet.getRange(1,1).setValue(GID);

}


function sendLINE(){
  var url = 'https://api.line.me/v2/bot/message/push';
  var toID = 'C7f9a7fd802174f92ce16cb1335b84a1f';//前回取得したグループID
  
  var body = '通帳よろしくネ';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + LINE_CHANNEL_ACCESS_TOKEN,
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': toID,
      'messages':[{
        'type': 'text',
        'text': body ,
      }]
     })
   })
}
