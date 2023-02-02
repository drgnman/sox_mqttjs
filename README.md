# sox_mqttjs
- sox_mqtt をpythonで実装したのをベースにnode.jsでも同様の動きをさせられるようにしました。
- mqtt-brokerの設定や各種基本については、[sox_mqtt](https://github.com/nkzwlab/sox_mqtt)をご確認ください。
- ここでは、sox-mqttjsの使い方だけまとめておきます。

## sox_mqttモジュール
- [mqtt.js](https://github.com/mqttjs)を拡張しているのでまずは以下を実行ください。
```
npm install mqtt
```

- sox_mqttフォルダ配下に各種モジュールを配置しているので、必要に応じてimportしてください。
- 基本的には以下で全部importしてしまうのがいいと思います。

```
let sox_mqtt = require("./sox_mqtt")
```

## Connection
- sox_mqtt(python)との違いはmqtt.jsがclient_idを自動でランダム生成してくれるので引数から除外しています。
- pythonと違い、関数呼び出し時に変数名指定ができない(記載順)になるため、ご注意
```
connection = new sox_mqtt.Connection("localhost", 1883, keepalive=60 ,username=null, password=null);
client = connection.connect();
```

## Create
- sox_mqtt(python)との違いは,sox_mqtt(python)ではtransducerクラスがnodeクラス内に定義していましたが、sox_mqttjsではそれぞれを独立したクラスで宣言しています。
メソッド名は同じです。

## Publish
- sox_mqttと違いなく作れたと思います。

## Subscribe
- sox_mqttとの違いは、mqtt.jsのsubscribeメソッドがどうやら、複数のトピックの同時サブスクライブに対応していない(後に書いたsubscribeで上書きされる)ため、subscribe単位でclientを生成する必要がありそうです。
- clientオブジェクトごとに、下記通り、受信時の処理の設定を書いてください。

```
client.on("message", function(topic, msg){
    console.log(msg.toString() + "from topic: " +topic.toString());
})
```