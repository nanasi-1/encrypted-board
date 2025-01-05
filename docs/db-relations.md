# データベース設計

## テーブル

- `posts`: 投稿一覧
- `verify-keys`: 検証用鍵の保管

### `posts`
投稿一覧を保管するテーブル。

```mermaid
erDiagram
posts {
  bigint id PK
  string encrypted_body
  string public_key_digest
  string verify_key_digest "null可"
  cidr ip_address
  timestamp created_at
}
```

`created_at`にインデックスを貼るといいらしい by Copilot

### `verify_keys`
本人確認用の認証システムに使う、検証用鍵。
署名付きの投稿がされるたびにここから鍵を引っ張り出し、検証する。

```mermaid
erDiagram
verify_keys {
  string digest PK
  string verify_key
  cidr ip_address
  timestamp created_at
}
```

もし一定期間したら削除できるのなら、削除してもいいかも。

`created_at`にインデックスを貼るといいらしい by Copilot

## リレーション

```mermaid
erDiagram
posts |o--o| verify-keys : "a"

posts {
  string verify_key_digest "null可"
}

verify-keys {
  string digest PK
}
```