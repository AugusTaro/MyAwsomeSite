# オーガスタロウの館 - Claude開発ガイド

## プロジェクト概要

MicroCMSをヘッドレスCMSとして使用したGatsby製の個人ブログサイトです。React + TypeScript + Tailwind CSSで構築されています。

- **サイト名**: オーガスタロウの館
- **URL**: https://augustaro.com
- **CMS**: MicroCMS
- **フレームワーク**: Gatsby 5.13.5

## アーキテクチャ

### 技術スタック
- **フロントエンド**: React 18.1.0 + TypeScript 5.5.4
- **ビルドツール**: Gatsby (静的サイトジェネレーター)
- **スタイリング**: Tailwind CSS 3.4.7 + DaisyUI 4.12.10
- **CMS**: MicroCMS (ヘッドレスCMS)
- **アナリティクス**: Google Analytics
- **セキュリティ**: DOMPurify (HTMLサニタイゼーション)

### プロジェクト構成
```
src/
├── components/          # Reactコンポーネント
│   ├── layout.jsx      # 共通レイアウト
│   ├── seo.jsx         # SEOコンポーネント
│   ├── Navbar.tsx      # ナビゲーション
│   ├── ArticleCard.jsx # 記事カード
│   ├── CategoryButtons.jsx # カテゴリボタン
│   └── ...
├── pages/              # ページコンポーネント (自動ルーティング)
│   ├── index.jsx       # トップページ
│   ├── blogIndex.jsx   # ブログ一覧
│   └── 404.jsx         # 404ページ
├── templates/          # 動的ページテンプレート
│   └── article.jsx     # 記事詳細ページ
├── constants/          # 定数ファイル
├── utils/              # ユーティリティ関数
└── images/             # 静的アセット
```

## 開発コマンド

### 必須環境変数
環境変数ファイル (`.env.development`, `.env.production`) に以下を設定:
```env
MICROCMS_API_KEY=your_api_key
MICROCMS_SERVICE_ID=your_service_id  
MICROCMS_ENDPOINT=your_endpoint
GOOGLE_ANALYTICS_ID=your_ga_id
```

### 開発サーバー起動
```bash
npm run develop
# または
npm start
```
→ http://localhost:8000 で起動

### ビルド
```bash
npm run build
```

### ビルド済みサイト配信
```bash
npm run serve
```
→ http://localhost:9000 で配信

### その他のコマンド
```bash
npm run clean      # キャッシュクリア
npm run format     # Prettierでコードフォーマット
```

## 主要ファイル

### 設定ファイル
- `gatsby-config.js`: Gatsbyプラグイン設定、サイトメタデータ
- `gatsby-node.js`: 動的ページ生成ロジック
- `package.json`: 依存関係とスクリプト定義

### コアコンポーネント
- `src/templates/article.jsx`: 記事詳細ページテンプレート (gatsby-node.jsで生成)
- `src/components/layout.jsx`: 全ページ共通レイアウト
- `src/components/seo.jsx`: SEOメタタグ設定

## データフロー

1. **MicroCMS**: `gatsby-source-microcms`でコンテンツ取得
2. **GraphQL**: ビルド時にMicroCMSからデータをクエリ
3. **動的ページ生成**: `gatsby-node.js`で記事ページを自動生成
4. **静的サイト生成**: 全ページを静的HTMLとして出力

## セキュリティ対策

- **DOMPurify**: HTMLコンテンツのサニタイゼーション (article.jsx:42-46)
- **環境変数**: APIキーなどの機密情報を分離
- **静的生成**: サーバーサイド攻撃リスクの軽減

## トラブルシューティング

### よくある問題
1. **MicroCMS接続エラー**: 環境変数の設定確認
2. **ビルド失敗**: `npm run clean` 後に再ビルド
3. **画像最適化エラー**: `gatsby-plugin-image`の依存関係確認

### 開発時のポイント
- 環境変数変更後は開発サーバー再起動が必要
- GraphQLクエリは `http://localhost:8000/___graphql` で確認可能
- 画像最適化は初回ビルド時に時間がかかります

## コーディング規約

- **言語**: JavaScript/TypeScript混在
- **スタイル**: Tailwind CSS + DaisyUI
- **フォーマット**: Prettier使用
- **コンポーネント**: 関数コンポーネント + Hooks
- **命名**: キャメルケース (JavaScript), PascalCase (コンポーネント)

## 配信

静的サイトとして以下にデプロイ可能:
- Netlify
- Vercel  
- GitHub Pages
- AWS S3 + CloudFront

ビルド出力は `public/` ディレクトリに生成されます。