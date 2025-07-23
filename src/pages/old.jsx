import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import RetroLayout from "../components/retro/RetroLayout"
import RetroCounter from "../components/retro/RetroCounter"
import RetroUserCard from "../components/retro/RetroUserCard"
import RetroContentCard from "../components/retro/RetroContentCard"

const OldPage = ({ data }) => {
  const posts = data.allMicrocmsBlogs.nodes

  const retroStyles = {
    marquee: {
      backgroundColor: '#ff6666',
      border: '2px solid #000000',
      padding: '8px',
      margin: '10px 0',
      fontSize: '16px',
      fontWeight: 'bold',
      animation: 'flashBackground 2s infinite alternate',
      boxShadow: '0 0 10px #cccccc'
    },
    marqueeText: {
      color: '#ffff00',
      textShadow: '2px 2px 0px #0000ff, -1px -1px 0px #000000',
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
        `}
      </style>
      <Seo
        title="オーガスタロウの館 - レトロver"
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

        <RetroCounter />

        <div style={retroStyles.construction}>
          ※ このページは実験的なレトロデザインページです ※<br />
          Last Updated: 1999/12/31 23:59 JST
        </div>

        <RetroUserCard />

        <hr style={{ border: 'none', borderTop: '2px solid #000000', margin: '20px 0' }} />

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
              link="/blogIndex"
            />
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #000000', margin: '30px 0' }} />

        <div style={{
          backgroundColor: '#e0e0e0',
          border: '2px inset #cccccc',
          padding: '15px',
          textAlign: 'center',
          fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy'
        }}>
          <p style={{ fontSize: '10px', margin: '8px 0', color: '#000080' }}>
            推奨環境: Internet Explorer 4.0以上 / Netscape Navigator 4.0以上
          </p>
          <p style={{ fontSize: '10px', margin: '8px 0', color: '#000080' }}>
            解像度: 800x600以上 / 256色以上 / JavaScript有効
          </p>
          <p style={{ fontSize: '9px', margin: '8px 0', color: '#666666' }}>
            このページのデザインは1999年当時のWebサイトを再現しています
          </p>
          <div style={{ fontSize: '9px', color: '#800080', marginTop: '10px' }}>
            Webmaster: augustaro@example.com | Since 1999.01.01
          </div>
        </div>
      </RetroLayout>
    </>
  )
}

export default OldPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlogs(
      sort: { fields: [createdAt], order: DESC }
      filter: { category: { elemMatch: { name: { eq: "WebApp" } } } }
    ) {
      nodes {
        id
        title
        content
        blogsId
        createdAt
        eyecatch {
          url
        }
        category {
          name
        }
      }
    }
  }
`