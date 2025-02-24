# API Endpoints

## 概要
当プロジェクトでは、Next.jsのAPI Routeを使用しています。
しかしNext.js独自の関数を覚えるのが面倒なため、メイン処理はHonoを使って書かれています。

また、通信に使う形式はリクエスト / レスポンスともにJSONです。

## リソース

### 投稿(`post`)
投稿は掲示板の投稿を示す。

- Create: 投稿が新しく作成できる
- Read: 掲示板で一覧を表示できる
- Update: 不可
- Delete: 不可

### 検証用鍵(`verify-key`)
**このリソースは未実装です。**

本人確認に使う検証用鍵を示す。

- Create: 検証用鍵は新しく追加できる
- Read: 不可（投稿処理で使うため）
- Update: 不可
- Delete: 不可

## APIドキュメント

### 投稿(`post`)

#### `POST /api/post`
投稿を追加する

Request Body:
```json
{
  "plainText": "string",
  "publicKey": "string",
  "sign": { // 署名
    "has": true | false,
    "signature": "string",
    "signKeyDigest": "string",
  }
}
```

Response:

- `200`: 正常に投稿完了
- `400`: バリデーションエラー
- `401`: `sign`での認証に失敗

#### `GET /api/posts`
投稿一覧を返す

Request Query:
- `page`: ページネーションでのページ

Response:
```json
{
  "posts": [
    {
      "id": number,
      "createdAt": "string",
      "body": "string",
      "publicKeyDigest": "string",
      "sign": {
        "has": true | false,
        "verifyKey": "string" | void
      }
    },
    // etc...
  ],
  "hasNext": true | false,
}
```

### 検証用鍵(`verify-key`)

**このAPIは未実装です。**

#### `POST /api/verify-key`
検証用鍵を追加する

Request Body:
```json
{
  "verifyKey": "string",
}
```

Response:

- `200`: 正常に投稿完了
  Body:
  ```json
  {
    "digest": "string"
  }
  ```
- `400`: すでにその鍵と同じハッシュの鍵が登録されている