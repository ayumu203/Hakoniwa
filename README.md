# Hakoniwa
## フォルダ構成
### client
viteで作成
```
npm run dev
``` 
で実行可能
### server
```
node start
```
で実行可能
firebaseでデータ管理する場合には不要
SQLいじるなら必要?

## 今後の開発？
### prototypeブランチでの作業
1. 最低限の画面の実装
   * ヘッダ部分(タイトル,配布先へのリンク先等,画面分割等)はやらない
   * キャンバスとコマンドリスト,命令部分のみ実装 
2. キャンバスでのマップの描画
   * キャンバスの実装
   * マップのキャンバスへの描画
3. 最低限のコマンドの実装
   * 建物建てる,埋める,整地 

### prototypeの実装詳細
#### 画像のパスを通す
   viteではpublicのディレクトリから画像を取得することができる.

#### 必要な画像のパスをまとめる
   必要な画像のパスを1つのディレクトリに置いてエクスポートできるようにしておく