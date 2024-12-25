# CI / CD
当プロジェクトでは、[この本](https://zenn.dev/hayato94087/books/6a55108faa37ba/viewer/e020g4xk6s17t3v6)を参考にCIとかCDをやる。

## 構成
本とほぼ同じ。

1. ローカルで開発
1. GitHubリポジトリにpush
1. CDによって自動でVercelにデプロイ

## ブランチ戦略

- `main`: メインブランチ
  - ここにpush or `feature`からマージされたらVercelへデプロイする
- `feature/*`: 機能追加用ブランチ
  - GitHubにpushするブランチ
  - 一応プルリクを設ける...かもしれない
  - `develop`などは挟まない