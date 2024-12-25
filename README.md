# 暗号掲示板
やりたいなー

## 概要
暗号掲示板は、簡単にいうと**投稿内容が暗号化された**掲示板。
...掲示板よりチャットルームの方が近いかも。

投稿者は平文を指定の公開鍵によって暗号化し、暗号文を投稿する。
閲覧者は暗号文を秘密鍵によって復号し、平文を読む。
わざわざこんなことするのは、当然**ロマン**のため。

- 投稿者はアカウントなしで掲示板に投稿できる
- デフォルトで鍵を3つくらい用意しておく
- 鍵の識別はハッシュでやる

掲示板にはトピックなどを設けず、全て同じスレッド（？）で管理する。

なお、暗号掲示板はフロントエンドとバックエンドのあるWebアプリで、ZEN Studyのコンテストに出そうと思ってる。

## 技術スタック
今回はNext.jsメインで進めようと思う。
あとホスティングはVercel。

- フロントエンド: Next.js
  - Tailwind CSS
- バックエンド（メイン）: Hono
  - API Route: Next.js
  - アダプターでNext.jsのAPI Routeとして動かす
- 暗号化: Web Crypto API
  - 暗号化 / 復号: RSA-OAEP
  - 署名 / 検証: RSAのやつ
- ORM: Prisma
- ホスティング: Vercel
  - 維持しきれなかったらミラーもある
- DB: Vercelのやつ
- リポジトリ: GitHub

## 機能

### 掲示板
掲示板には、データベースに保存された各投稿が表示される。
このページ（多分パスは`/`）が暗号掲示板のメインとなる。

掲示板はページネーションで区分けする予定。
なんか最後の番号取得すると重いらしいので、最終ページに飛ぶボタンは記号にする。

### 投稿
掲示板の下部についている投稿フォームから投稿できる。

投稿は以下の要素を持っている、

- 暗号文
- 鍵のハッシュ
- 投稿日時
- 認証情報（仮）

また、投稿の本文は平文ではなく暗号文で保存する。
平文じゃロマンないし。
暗号化処理は重いが、HTTPリクエストに平文が載るのは気に食わないので、クライアント側で暗号化する。

投稿処理はServer Actionsにするか...?
いやでもわざわざAPIエンドポイントにする必要性ないし...
どうせやることリクエストだけだし...

### 投稿を読む
投稿は暗号化されているので、それを秘密鍵によって復号する必要がある。

復号フェーズでは、新しく入力した秘密鍵で復号する。
この際UIをモーダルにしたい。

また、暗号掲示板では、同じ秘密鍵を復号するたびに手で入力することにする。
ここで保存しちゃったら保存先も面倒だし、何より復号してる感がない。

### 返信
返信くらいはあった方がいいか...?
なんか例えば`>255`みたいな感じで
これは投稿についてる返信ボタンからやる、みたいな

返信の欄を自由入力にしちゃうと、暗号文以外を投稿できるという抜け道ができる。
だけど、専用の返信欄を設けないと、返信先がいちいち解読しないとわからなくなって使いづらい。

### 鍵の生成
認証や暗号化に使える鍵を生成する機能があったほうが便利なはず

`/generate-key`みたいな別のパスにしたほうがいいかも

### デジタル署名での本人認証（仮）

Web Crypto APIはデジタル署名にも対応しているので、実装は不可能ではないと思う。

ただし、暗号掲示板では公開鍵暗号方式を採用予定。
よって、独自の鍵を使っている場合、その文章を解読できた時点で、送り先が正しいことが確定する。
だって秘密鍵ないと解読できないし。

だから、使い道があるとすれば投稿者の本人確認。
暗号文の投稿は公開鍵さえあれば誰でもできるので、こちらに認証ができることは価値あるかも。

### 使い方ページ
多分ないとわかりづらい
`/about`あたりに用意してもいいかも

### 実装しない機能

- 掲示板をトピックで分ける
- アカウントによる認証
- 通知
- 鍵の投稿
  - めんどい
  - ないほうがわかりやすいまである

## 非機能要件的な

### IPアドレスの保存
なんか保存しとかないとまずそうな気がした。

一応特定の足がかりくらいは必要だと思うので、DBに何かを追加する処理とかはIPアドレスを保存する。

### IPアドレスでの制限
まずいらないと思うけど、念の為実装する。

同一IPアドレスで以下を制限する。

- 投稿: 1時間に60回くらい？
- 検証用鍵の追加: 1日に10回くらい？

## UIデザイン
[Figmaのデザインカンプ](https://www.figma.com/design/t7cTgBTew0sSKiOOKT6sZg/暗号掲示板?t=P15mOFCTjyjhQbwE-0)を参照。
結構かっこよくなった気がする。

## リンク
- [GitHub](https://github.com/nanasi-1/encrypted-board)

### 参考資料

- [CI / CDの解説本](https://zenn.dev/hayato94087/books/6a55108faa37ba/viewer/e020g4xk6s17t3v6)
- [DBの解説本](https://zenn.dev/hayato94087/books/94bf9a15a98684/viewer/f000ut2i2b1lk4a1)