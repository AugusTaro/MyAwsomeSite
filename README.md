# オーガスタロウの館 (AugusTaro's Blog)

個人開発に関するネタを中心に記事を書いているGatsbyベースのブログサイトです。

## 🌟 概要

MicroCMSをヘッドレスCMSとして使用し、Gatsby + React + TypeScript + Tailwind CSSで構築されたモダンなブログサイトです。

- **サイトURL**: https://augustaro.com
- **著者**: オーガスタロウ
- **テーマ**: 個人開発、技術記事

## 🚀 技術スタック

### フレームワーク・ライブラリ
- **Gatsby 5.13.5** - React ベースの静的サイトジェネレーター
- **React 18.1.0** - UI ライブラリ
- **TypeScript 5.5.4** - 型安全な JavaScript

### スタイリング
- **Tailwind CSS 3.4.7** - ユーティリティファーストCSSフレームワーク
- **DaisyUI 4.12.10** - Tailwind CSS ベースのコンポーネントライブラリ
- **@tailwindcss/typography** - リッチテキスト用スタイリング

### コンテンツ管理
- **MicroCMS** - ヘッドレス CMS
- **GraphQL** - データクエリ言語

### 開発・ビルドツール
- **PostCSS** - CSS 処理ツール
- **Autoprefixer** - CSS ベンダープレフィックス自動付与
- **Prettier** - コードフォーマッター

## 📁 プロジェクト構造

```
src/
├── components/          # 再利用可能なReactコンポーネント
│   ├── AppCard.jsx
│   ├── ArticleCard.jsx
│   ├── CategoryButtons.jsx
│   ├── Navbar.tsx
│   ├── layout.jsx      # メインレイアウト
│   └── seo.jsx         # SEOコンポーネント
├── constants/          # アプリケーション定数
├── images/             # 静的アセット
├── pages/              # Gatsbyページ（自動ルーティング）
│   ├── index.jsx       # ホームページ
│   ├── blogIndex.jsx   # ブログ一覧ページ
│   └── 404.jsx         # 404エラーページ
├── styles/             # CSSファイル
├── templates/          # 動的ページテンプレート
│   └── article.jsx     # 個別記事テンプレート
└── utils/              # ユーティリティ関数
```

## 🔧 開発環境のセットアップ

### 前提条件
- **Node.js**: バージョン 18以上 (推奨: 18.x LTS)
- **npm**: Node.jsに付属 (または yarn)
- **Git**: バージョン管理用

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

プロジェクトルートに環境変数ファイルを作成してください：

**`.env.development`** (開発環境用):
```env
# MicroCMS設定
MICROCMS_API_KEY=your_microcms_api_key_here
MICROCMS_SERVICE_ID=your_service_id_here
MICROCMS_ENDPOINT=your_endpoint_name_here

# Google Analytics (開発環境では任意)
GOOGLE_ANALYTICS_ID=your_google_analytics_id_here
```

**`.env.production`** (本番環境用):
```env
# 同様の設定で本番用の値を設定
MICROCMS_API_KEY=your_production_api_key
MICROCMS_SERVICE_ID=your_production_service_id
MICROCMS_ENDPOINT=your_production_endpoint
GOOGLE_ANALYTICS_ID=your_production_ga_id
```

### 4. 開発サーバーの起動

```bash
npm run develop
```

開発サーバーが `http://localhost:8000` で起動します。
GraphQL Explorer: `http://localhost:8000/___graphql`

### 5. 動作確認

ブラウザでサイトが正常に表示されることを確認してください。MicroCMSからデータが取得できない場合は、環境変数の設定を見直してください。

## 📜 利用可能なスクリプト

```bash
# 開発サーバーの起動（ホットリロード付き）
npm run develop
npm run start

# 本番用ビルド
npm run build

# ビルド済みサイトの配信
npm run serve

# キャッシュのクリア
npm run clean

# コードフォーマット
npm run format
```

## 🔨 ビルドと配信

### 開発サーバーの起動
```bash
# 開発サーバーの起動（ホットリロード付き）
npm run develop
# または
npm run start
```
- 開発サーバーが `http://localhost:8000` で起動
- ファイル変更時の自動リロード
- GraphQL Explorer: `http://localhost:8000/___graphql`

### 本番ビルド
```bash
# 本番用静的サイトの生成
npm run build
```
- `public/` ディレクトリに静的ファイルを出力
- 最適化・圧縮済みのファイルを生成
- SEO・パフォーマンス最適化済み

### ビルド結果のローカル確認
```bash
# ビルド済みサイトをローカルで配信
npm run serve
```
- 本番用サイトが `http://localhost:9000` で配信
- 実際のデプロイ前の最終確認に使用

### その他のコマンド
```bash
# Gatsbyキャッシュのクリア（ビルドエラー時に実行）
npm run clean

# コードフォーマット（Prettier）
npm run format
```

### デプロイの準備
1. `npm run build` でビルド実行
2. `npm run serve` でローカル確認
3. `public/` フォルダの内容をWebサーバーにアップロード

## 🎨 主な機能

- **レスポンシブデザイン** - モバイルファーストアプローチ
- **カテゴリフィルタリング** - ブログ記事のカテゴリ別表示
- **SEO最適化** - メタタグ、構造化データ対応
- **画像最適化** - 自動WebP変換、遅延読み込み
- **シンタックスハイライト** - Prism.js によるコードハイライト
- **Google Analytics** - アクセス解析統合
- **PWA対応** - マニフェストファイル生成

## 🔒 セキュリティ

- **DOMPurify** - HTMLサニタイゼーション
- **環境変数** - 機密情報の安全な管理
- **静的サイト生成** - サーバーサイド攻撃の軽減

## 🌐 配信

サイトは静的ファイルとして生成されるため、以下のような配信プラットフォームで簡単にホストできます：

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 開発に参加

1. プロジェクトをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは0BSDライセンスの下で公開されています。

## 🐛 トラブルシューティング

### よくある問題

1. **ビルドエラー: MicroCMS設定不足**
   ```
   "apiKey" is required
   "serviceId" is required
   ```
   → 環境変数が正しく設定されているか確認してください。

2. **DOMPurifyエラー**
   ```
   DOMPurify.sanitize is not a function
   ```
   → サーバーサイドレンダリング時の問題です。既に修正済みです。

3. **GraphQLクエリの警告**
   ```
   Deprecated syntax of sort
   ```
   → 非推奨の構文が使用されています。必要に応じて更新してください。

### 開発時のヒント

- キャッシュ問題が発生した場合は `npm run clean` を実行
- 環境変数の変更後は開発サーバーを再起動
- 画像の最適化には時間がかかる場合があります

---

**開発者**: オーガスタロウ  
**Twitter**: @Augus_taro_  
**サイト**: https://augustaro.com