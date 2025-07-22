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
      backgroundColor: '#ffff00',
      border: '1px solid #000000',
      padding: '5px',
      margin: '10px 0',
      fontSize: '14px',
      fontWeight: 'bold'
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
      backgroundColor: '#ff6600',
      color: '#ffffff',
      padding: '10px',
      textAlign: 'center',
      border: '2px solid #000000',
      fontWeight: 'bold',
      animation: 'blink 1.5s infinite'
    }
  }

  return (
    <>
      <Seo
        title="オーガスタロウの館 - レトロver"
        description="90年代風のホームページです。懐かしいWebデザインでお楽しみください。"
        eyecatch="https://augustaro.github.io/My_Images/MyIcon/MyIcon.jpg"
      />
      <RetroLayout title="オーガスタロウの館">
        <div style={retroStyles.marquee}>
          <marquee behavior="scroll" direction="left" scrollamount="3">
            ★★★ Welcome to Augustaro's Retro Homepage! ようこそオーガスタロウの館へ！ ★★★
          </marquee>
        </div>

        <RetroCounter />

        <div style={retroStyles.construction}>
          ⚠️ このページは実験的なレトロデザインページです ⚠️
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
          border: '1px inset #cccccc',
          padding: '15px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            このサイトは<strong>Internet Explorer 4.0</strong>以上、<strong>Netscape Navigator 4.0</strong>以上でご覧ください。
          </p>
          <p style={{ fontSize: '12px', margin: '5px 0' }}>
            画面解像度 <strong>800×600</strong> 以上を推奨します。
          </p>
          <p style={{ fontSize: '11px', margin: '5px 0', color: '#666666' }}>
            ※このページは現代のブラウザでも正常に動作します
          </p>
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