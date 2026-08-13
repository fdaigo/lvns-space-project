# LVNS SPACE PROJECT

`water-cycle.lne.st` と同様に、1 ページ構成で公開するための静的サイトです。

## Local preview

```bash
npm run dev
```

その後、`http://localhost:4173` を開きます。

## GitHub に上げる

```bash
git init
git add .
git commit -m "Initial LVNS SPACE PROJECT site"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Cloudflare Pages へ公開する

1. Cloudflare Dashboard で `Workers & Pages` を開く
2. `Create application` → `Pages` → `Connect to Git`
3. GitHub リポジトリにこのプロジェクトを選ぶ
4. Build settings は次の通り

```text
Framework preset: None
Build command: (empty)
Build output directory: /
Root directory: (empty)
```

5. `Save and Deploy`

## カスタマイズしやすい箇所

- 文言: `index.html`
- 見た目: `styles.css`
- メニューとスクロール演出: `script.js`
