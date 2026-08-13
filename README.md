# LVNS SPACE PROJECT

宇宙を起点に、人類の視座を変革するプロジェクトサイトです。Astro、Markdown、GitHub、Cloudflare Pagesで構成しているため、コードを大きく触らずに固定ページやニュースを更新できます。

## 技術構成

- Astro + TypeScript
- Markdown / MDX
- Astro Content Collections（ニュース）
- @astrojs/sitemap による sitemap
- GitHub連携のCloudflare Pages

## ディレクトリ構成

~~~text
src/
  components/       共通ヘッダー、フッター
  content/news/     ニュース本文（Markdown / MDX）
  layouts/          共通レイアウトとMarkdownページ用レイアウト
  pages/            URLになるページ、HISTORY、ニュースルート
  styles/           サイト全体のCSS
  content.config.ts Content Collectionのスキーマ
public/assets/      ロゴと宇宙写真などの静的アセット
astro.config.mjs    サイトURL、MDX、sitemap設定
~~~

## 開発環境の立ち上げ

Node.js 18.17以上、またはNode.js 20以上を使用してください。

~~~bash
npm install
npm run dev
~~~

ブラウザで http://localhost:4321 を開きます。型とAstro構成の確認には npm run check、本番ビルドには npm run build、ビルド後の確認には npm run preview を使います。

## 固定ページを追加する

src/pages/ に .md または .mdx ファイルを追加します。ファイル名がURLになります。例えば src/pages/research.md は /research/ になります。

~~~md
---
layout: ../layouts/MarkdownPageLayout.astro
title: Research
description: 研究活動について
---

## 見出し

本文をMarkdownで書きます。
~~~

## ニュースを追加する

src/content/news/ に .md または .mdx ファイルを追加し、次のfrontmatterを記入します。draft: true の記事は本番ビルドに含まれません。

~~~md
---
title: 新しいニュース
description: ニュースの概要
pubDate: 2026-08-13
updatedDate: 2026-08-13
heroImage: /assets/hero-a.jpg
tags:
  - Project
draft: false
---

ここから本文を書きます。
~~~

保存後、ニュース一覧 /news/ と個別ページ /news/ファイル名/ に自動で反映されます。画像を増やす場合は public/assets/ に置き、heroImage に /assets/画像名.jpg と書きます。

## Cloudflare Pagesへのデプロイ

GitHubリポジトリをCloudflare Pagesに接続し、次のBuild settingsを設定します。

~~~text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: （空欄）
Production branch: main
~~~

main にpushすると自動デプロイされます。Astro側の公開URLは astro.config.mjs の site に設定しています。

## 独自ドメイン設定時の注意点

Cloudflare Pagesのプロジェクトで Custom domains から space.lne.st を追加した後、DNSを管理しているサービス側で次のCNAMEを設定します。

~~~text
Type: CNAME
Name: space
Target: lvns-space-project.pages.dev
~~~

DNSを別サービスで管理している場合は、そのサービスにCNAMEを追加してください。既存の space レコードがある場合は競合するため、切り替え前に確認します。Cloudflare Pages側でドメインがActiveになるまで少し時間がかかることがあります。

## LLMに更新を依頼する例

~~~text
src/content/news/ に新しいニュースを1件追加してください。
タイトルは「○○」、公開日は 2026-08-20、タグは Space と Research、draft は false にしてください。
本文は日本語で400字程度、heroImage は /assets/hero-b.jpg を使ってください。
既存のファイルやデザインは変更しないでください。
~~~

デザイン変更を依頼する場合は src/styles/global.css、共通の文言やナビゲーション変更は src/components/ を対象に指定すると安全です。
