import React from "react"
import useSWR from "swr"
import Seo from "../seo"
import RetroLayout from "../retro/RetroLayout"
import RetroCounter from "../retro/RetroCounter"
import RetroUserCard from "../retro/RetroUserCard"
import RetroContentCard from "../retro/RetroContentCard"

const RetroPage = ({ data }) => {
  const posts = data.allMicrocmsBlogs.nodes
  
  // SWR fetcher function
  const fetcher = async (url) => {
    const response = await fetch(url, { method: "POST" })
    if (!response.ok) throw new Error("Failed to fetch")
    return response.json()
  }

  // useSWRでカウンターデータを取得（連打防止のため10秒間隔）
  const { data: counterData, error } = useSWR("/api/counter", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    dedupingInterval: 10000, // 10秒間連打防止
  })

  const retroStyles = {
    marquee: {
      backgroundColor: '#ff6666',
      border: '2px solid #000000',
      padding: '8px',
      margin: '5px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      animation: 'flashBackground 2s infinite alternate',
      boxShadow: '0 0 10px #cccccc'
    },
    marqueeText: {
      color: '#ffff00',
      textShadow: '2px 2px 0px #0000ff, -1px -1px 0px #000000',
      WebkitTextStroke: '1px #000000',
      animation: 'flashText 2.5s infinite alternate',
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy'
    },
    contentGrid: {
      display: 'table',
      width: '100%',
      marginTop: '20px'
    },
    leftColumn: {
      display: 'table-cell',
      width: '50%',
      verticalAlign: 'top',
      paddingRight: '10px'
    },
    rightColumn: {
      display: 'table-cell',
      width: '50%',
      verticalAlign: 'top',
      paddingLeft: '10px'
    },
    construction: {
      backgroundColor: '#fffacd',
      color: '#000080',
      padding: '12px',
      textAlign: 'center',
      border: '3px inset #c0c0c0',
      fontWeight: 'normal',
      fontSize: '11px',
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy'
    }
  }

  return (
    <>
      <style>
        {`
          @keyframes flashBackground {
            0% { background-color: #ff6666; }
            50% { background-color: #6666ff; }
            100% { background-color: #ff6666; }
          }
          @keyframes flashText {
            0% { color: #ffff00; text-shadow: 2px 2px 0px #0000ff, -1px -1px 0px #000000; }
            50% { color: #ff0000; text-shadow: 2px 2px 0px #ffff00, -1px -1px 0px #000000; }
            100% { color: #ffff00; text-shadow: 2px 2px 0px #0000ff, -1px -1px 0px #000000; }
          }

          /* デフォルト（スマホ）: スマホレイアウト表示、PCレイアウト非表示 */
          .mobile-layout {
            display: block;
          }
          
          .desktop-layout {
            display: none;
          }

          /* PC用レスポンシブレイアウト（1024px以上）: スマホレイアウト非表示、PCレイアウト表示 */
          @media (min-width: 1024px) {
            .mobile-layout {
              display: none;
            }
            
            .desktop-layout {
              display: block;
            }
            
            .desktop-container {
              display: table;
              width: 100%;
              margin-top: 10px;
            }
            
            .desktop-sidebar {
              display: table-cell;
              width: 50%;
              vertical-align: top;
              padding-right: 10px;
            }
            
            .desktop-main {
              display: table-cell;
              width: 50%;
              vertical-align: top;
              padding-left: 10px;
            }
          }
        `}
      </style>
      <Seo
        title="オーガスタロウの館"
        description="90年代風のホームページです。懐かしいWebデザインでお楽しみください。"
        eyecatch="https://augustaro.github.io/My_Images/MyIcon/MyIcon.jpg"
      />
      <RetroLayout title="オーガスタロウの館">
        <div style={retroStyles.marquee}>
          <marquee behavior="scroll" direction="left" scrollamount="3">
            <span style={retroStyles.marqueeText}>
              ★★★ Welcome to Augustaro's YAKATA!! ようこそオーガスタロウの館へ！ ★★★
            </span>
          </marquee>
        </div>

        {/* カウンターは共通で1つのみ */}
        <RetroCounter 
          visitorCount={counterData?.total || 0} 
          error={error}
        />

        {/* スマホ用レイアウト */}
        <div className="mobile-layout">
          <RetroUserCard />
          <hr style={{ border: 'none', borderTop: '2px solid #000000', margin: '15px 0' }} />
          <div style={retroStyles.contentGrid}>
            <div style={retroStyles.leftColumn}>
              <RetroContentCard
                title="ブログ"
                describe="個人開発に関する技術記事、その他雑記を投稿しています！ぜひご覧ください。"
                link="/blogIndex"
              />
            </div>
            <div style={retroStyles.rightColumn}>
              <RetroContentCard
                title="アプリ"
                describe="作成したWebアプリを追加予定です！随時更新していきます。"
                link="/blogIndex/?category=WebApp"
              />
            </div>
          </div>
        </div>

        {/* PC用レイアウト */}
        <div className="desktop-layout">
          <div className="desktop-container">
            <div className="desktop-sidebar">
              <RetroUserCard />
            </div>
            <div className="desktop-main">
              <div style={retroStyles.contentGrid}>
                <div style={retroStyles.leftColumn}>
                  <RetroContentCard
                    title="ブログ"
                    describe="個人開発に関する技術記事、その他雑記を投稿しています！ぜひご覧ください。"
                    link="/blogIndex"
                  />
                </div>
                <div style={retroStyles.rightColumn}>
                  <RetroContentCard
                    title="アプリ"
                    describe="作成したWebアプリを追加予定です！随時更新していきます。"
                    link="/blogIndex/?category=WebApp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </RetroLayout>
    </>
  )
}

export default RetroPage