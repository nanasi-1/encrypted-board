# 暗号掲示板

## 概要
暗号掲示板は**投稿内容が暗号化された**匿名掲示板のWebアプリです。

投稿者は平文を任意の公開鍵によって暗号化し、暗号文を投稿します。
閲覧者は暗号文を秘密鍵によって復号し、平文を読むことができます。

わざわざ手間をかけてまで暗号化する理由は、なんだかかっこいいからです。

なお、某2chのようなスレッド機能等はないので、ひとつのスレッドに延々と書き込まれる掲示板となっています。

- 投稿者はアカウントなしで掲示板に投稿できる
- デフォルトで鍵を3つ用意する
- 鍵の識別にはハッシュを使う

## 技術スタック
メインはNext.jsです。

- フロントエンド: [Next.js](https://nextjs.org)
  - [Tailwind CSS](https://tailwindcss.com) (+ [Tailwind Variants](https://www.tailwind-variants.org))
- バックエンド: [Hono](https://hono.dev)
  - Next.jsの[Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)と組み合わせる
  - `hono/vercel`にある[アダプター](https://hono.dev/docs/getting-started/vercel)を使用
- 暗号化: [Web Crypto API](https://developer.mozilla.org/ja/docs/Web/API/Web_Crypto_API)
  - 暗号化 / 復号: RSA-OAEP
  - (署名 / 検証: RSA-PSS)
- ORM: [Prisma](https://www.prisma.io)

### 開発環境
- 開発サーバー: 
  - API & フロント: Next.js 
  - APIのみ: Hono + Bun
- DB: DockerのPostgreSQLイメージを使用

## 機能
詳細は[`/about`ページ](https://encrypted-board.vercel.app/about)をご覧ください。

### 一覧
`/`ページにはデータベースに保存された投稿一覧が表示されます。

### 投稿
投稿は以下の要素を持っています。

- 暗号文
- 鍵のハッシュ
- 投稿日時
- 認証情報

また、HTTPリクエストに平文が載ってしまうけど、暗号化はサーバーサイドで行います。
これはクライアントで暗号化を行う設計の場合、暗号文以外のものがAPIから送信される可能性があるからです。

### 投稿を読む
投稿は暗号化されているので、平文を読むには秘密鍵によって復号する必要があります。

### デジタル署名での本人認証

**この機能は未実装です。**

以下下書き

Web Crypto APIはデジタル署名にも対応しているので、実装は不可能ではないと思う。

ただし、暗号掲示板では公開鍵暗号方式を採用予定。
よって、独自の鍵を使っている場合、その文章を解読できた時点で、送り先が正しいことが確定する。
だって秘密鍵ないと解読できないし。

だから、使い道があるとすれば投稿者の本人確認。
暗号文の投稿は公開鍵さえあれば誰でもできるので、こちらに認証ができることは価値あるかも。

### 実装しない機能

- 掲示板をトピックで分ける
- アカウントによる認証
- 通知
- 返信
  - DBに返信のカラム入れるの忘れてた
  - マイグレーションのやり方調べるのめんどい...
- 鍵の投稿
  - 公開鍵が共有できたら面白そうだと思った
  - ないほうがわかりやすい

## 非機能要件的な

### IPアドレスの保存
なんか保存しとかないとまずそうな気がした。

**追記 2025/1/11**

HonoでIPアドレスを取得するときは`ConnInfo`を使う。
しかしこいつ、なんと環境によって使う`getConnInfo`関数が違うという曲者である。

それぞれの環境では以下のモジュールからインポートすること。

- 本番（Vercel）: `hono/vercel`
- 開発（Bun）: `hono/bun`
  - Bunがない環境でこれを使うと、Next.jsでビルドしたときにエラーになる
  - => 動的インポートを活用~~してゴリ押す~~

と思いきや、この構成の場合ローカルのNext.jsサーバーでのみIPが取得できなかった。
これは`hono/vercel`がVercelで使えるヘッダーからIPアドレスを取得しているため。
暗号掲示板ではIPアドレスが見つからなかったら`DEFAULT_IP`として扱うことにした。

### IPアドレスでの制限
同一IPアドレスで以下を制限する。
- 投稿: 一日に60回くらい？

## ページ
メインとなるページ以外にも、いくつか専用のページがあります。

- `/`: 暗号掲示板本体
- `/about`: 初めてページを訪れた人のために、このサイトの説明をする

以下のページは未実装です。
- `add-public`: 公開鍵と秘密鍵を生成する
- `add-sign`: 検証鍵をサーバーに追加し、認証が使えるようにする

## UIデザイン
[Figmaのデザインカンプ](https://www.figma.com/design/t7cTgBTew0sSKiOOKT6sZg/暗号掲示板?t=P15mOFCTjyjhQbwE-0)を参照。
結構かっこよくなった気がする。

## リンク
- [公開先](https://encrypted-board.vercel.app)
- [GitHub](https://github.com/nanasi-1/encrypted-board)
- [Vercel Project](https://vercel.com/nanasi-1s-projects/encrypted-board)

### 参考資料

- [CI / CDの解説本](https://zenn.dev/hayato94087/books/6a55108faa37ba/viewer/e020g4xk6s17t3v6)
- [DBの解説本](https://zenn.dev/hayato94087/books/94bf9a15a98684/viewer/f000ut2i2b1lk4a1)