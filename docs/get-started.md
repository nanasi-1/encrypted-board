# Get Started
暗号掲示板開発を始めるために必要なステップが書かれています。

これをローカルで動かしてみたい方、そして環境構築の方法を忘れた未來の自分のためのメモ書きです。

ついでに暗号掲示板と同じ構成のプロジェクトの参考になればと考えています。

## 推奨環境
MacOSの中でも、Appleチップを推奨します。
それ以外の環境で動くかどうかは不明です。

## 構成
暗号掲示板では以下の技術を使用しています。

| 名前 | 用途 | バージョン |
|:--|:--|:--| 
Bun | JavaScriptランタイム | 1.1.42
Docker | ローカルでのDB立ち上げ | 27.4.0
Git | バージョン管理 | 2.39.3


## 事前準備
これらは一度きりでOKです。

### インストール
必要なものをインストールします。

1. Homebrewをインストール
1. エディタをインストール（推奨: VSCode）
1. エディタの拡張機能をお好みでインストール（↓推奨）
    - Docker
    - Tailwind CSS IntelliSense
    - Prisma
    - Mermaidの図を表示できる拡張機能
    - Git GraphなどGitの補助
1. Gitをインストール
1. Bunをインストール
    ```sh
    brew install oven-sh/bun
    ```
1. Docker Desktopをインストール

### リポジトリからクローンする
[GitHubリポジトリ](https://github.com/nanasi-1/encrypted-board)からクローンします。

## 手順

### 依存関係をインストール

```sh
bun install
```

### データベースをセットアップ
初回のみDockerイメージをビルドします。
```sh
bun run dev-db:build
```

次に、コンテナを立ち上げます。
ローカル環境ではこのコンテナがデータベースサーバーとなります。
同時にシードやPrismaクライアントのセットアップも行います。
```sh
bun run dev-db:run
bun run dev-db:setup
```

### 開発サーバーを立ち上げ
以下のコマンドを実行します。
```sh
bun run dev
```

サーバーが立ち上がったら、ブラウザで http://localhost:3000 を開きます。