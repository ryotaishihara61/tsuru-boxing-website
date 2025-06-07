const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 'public' フォルダを静的ファイル（画像など）の置き場所として指定
// ▼▼▼ この行を修正します ▼▼▼
app.use(express.static(path.join(__dirname, 'public')));
// ▲▲▲ この行を修正します ▲▲▲

// --- データ部分は変更なし ---
const siteData = {
  title: "Tsuru's Boxing Chronicle",
  videos: [
    { youtubeId: 'C2WJHLfwbco', title: '31-May, 2025' },
    { youtubeId: 'moimgg-zsfU', title: '6-June, 2025' },
  ],
};

// --- ここから下も変更なし ---
app.get('/', (req, res) => {
  res.render('index', siteData);
});

app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
  console.log('停止するには Ctrl + C を押してください');
});