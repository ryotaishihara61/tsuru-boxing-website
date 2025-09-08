const express = require('express');
const path = require('path');
// const ogs = require('open-graph-scraper'); // OGSはもう使いません
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// サイトに表示するデータをここにすべて記述します
const siteData = {
  title: "Tsuru's Boxing Chronicle",
  videos: [
    { youtubeId: 'xIXFlVPQ0kM', title: '1st-lesson, Mar 2023' },
    { youtubeId: 'C2WJHLfwbco', title: '31-May, 2025' },
    { youtubeId: 'moimgg-zsfU', title: '6-June, 2025' },
    { youtubeId: 'tK9Y-5aim00', title: '13-June, 2025' },
    { youtubeId: '89nPWWKfWlo', title: '20-June, 2025' },
    { youtubeId: 'CZbnSy9_k1o', title: '8-August, 2025' },
    { youtubeId: 'KAhIIs8FhXE', title: '15-August, 2025' },
    { youtubeId: 'PT4NhjJCKGE', title: '29-August, 2025' },
    { youtubeId: 'eLHbxvYljt0', title: '5-September, 2025' },
  ],
  // ▼▼▼ inspirationLinks を手動で設定します ▼▼▼
  inspirationLinks: [
    {
      title: "Best Moments Of Naoya Inoue Showing His Greatness | TOP RANK'D",
      url: "https://www.youtube.com/watch?v=wszk2OfPv9A",
      // YouTubeの動画ID（URLの v= の後ろ）を使ってサムネイルURLを指定
      thumbnail: "https://i.ytimg.com/vi/wszk2OfPv9A/hqdefault.jpg", 
      description: "We ranked the best moments in which Naoya Inoue showed his superiority in the ring."
    },
    {
      title: "Junto Nakatani (26-0) Highlights & Knockouts",
      url: "https://www.youtube.com/watch?v=wgU_XUqa0zk",
      thumbnail: "https://i.ytimg.com/vi/wgU_XUqa0zk/hqdefault.jpg",
      description: "Junto Nakatani Highlights & Knockouts. Best Boxing & UFC Content."
    },
    {
      "title": "CRAZY KNOCKOUT POWER! Gervonta Davis HIGHLIGHTS & KNOCKOUTS",
      "url": "https://www.youtube.com/watch?v=upqk_vErdHo",
      "thumbnail": "https://i.ytimg.com/vi/upqk_vErdHo/hqdefault.jpg",
      "description": "Gervonta Davis is one of the BIGGEST PUNCHERS in boxing today. Take a look at some of his best moments & knockouts inside the ring!"
    }
  ]
};

// トップページにアクセスが来た時の処理
app.get('/', (req, res) => {
  // 用意しておいたデータをそのままテンプレートに渡す
  res.render('index', siteData);
});

app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました`);
  console.log('停止するには Ctrl + C を押してください');
});