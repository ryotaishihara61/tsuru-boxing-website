const express = require('express');
const app = express();
const port = 3000;

// EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

// 'public' フォルダを静的ファイル（画像など）の置き場所として指定
app.use(express.static('public'));


// --- ここからが重要なデータ部分です ---

// サイトに表示したい写真と動画のデータを準備します
const siteData = {
  title: "Tsuru's Boxing Chronicle", // ★サイトのタイトルです。自由に変更してください。

    // 表示したいYouTube動画のリスト
  videos: [
    { youtubeId: 'xIXFlVPQ0kM', title: '1st lesson, March2025' },    
    { youtubeId: 'C2WJHLfwbco', title: '31-May, 2025' }, 
    { youtubeId: 'moimgg-zsfU', title: '6-June, 2025' },
    // 必要に応じてこのリストに動画を追加できます。
    // { youtubeId: 'VIDEO_ID', title: '動画のタイトル' },
  ],

  // 表示したい写真のリスト
  photos: [
    { src: '/images/photo1.jpg', alt: '試合の写真1' },
    { src: '/images/photo2.jpg', alt: '練習風景' },
    { src: '/images/photo3.jpg', alt: '勝利の瞬間' },
    // 必要に応じてこのリストに写真を追加できます。
    // { src: '/images/photo4.jpg', alt: '説明文' },
  ]
  
};
// ★注意: 表示したい画像ファイルは `public/images` フォルダの中に置いてください。
// (例: `public/images/photo1.jpg`)
// ★YouTube IDは、動画URLの `watch?v=` の後ろにある英数字です。
// (例: https://www.youtube.com/watch?v=dQw4w9WgXcQ の場合、IDは dQw4w9WgXcQ です)

// --- データ部分ここまで ---


// トップページにアクセスが来た時の処理
app.get('/', (req, res) => {
  // ★ renderメソッドの2番目の引数で、上で作った siteData をテンプレートに渡します
  res.render('index', siteData);
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
  console.log('停止するには Ctrl + C を押してください');
});