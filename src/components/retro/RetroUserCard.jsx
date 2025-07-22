import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LINK_URLS } from "../../constants/linkURLs"

const RetroUserCard = () => {
  const retroStyles = {
    container: {
      border: '3px outset #cccccc',
      backgroundColor: '#ffffff',
      padding: '20px',
      margin: '20px 0',
      boxShadow: '5px 5px 0px #999999'
    },
    table: {
      width: '100%',
      border: '2px inset #808080',
      borderCollapse: 'collapse',
      fontFamily: '"MS Gothic", "ＭＳ ゴシック", monospace',
      fontSize: '11px'
    },
    th: {
      backgroundColor: '#c0c0c0',
      border: '1px inset #808080',
      padding: '6px',
      textAlign: 'center',
      fontWeight: 'normal'
    },
    td: {
      border: '1px inset #808080',
      padding: '6px',
      textAlign: 'center'
    },
    profileImage: {
      display: 'block',
      margin: '0 auto 15px',
      border: '3px inset #cccccc'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#000080',
      textAlign: 'center',
      margin: '15px 0',
      textDecoration: 'underline'
    },
    description: {
      fontSize: '14px',
      lineHeight: '1.6',
      margin: '15px 0',
      textAlign: 'left'
    },
    linkSection: {
      backgroundColor: '#f0f0f0',
      border: '2px inset #cccccc',
      padding: '10px',
      margin: '15px 0'
    },
    linkTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#000080',
      marginBottom: '10px'
    },
    link: {
      color: '#0000ff',
      textDecoration: 'underline',
      margin: '0 10px'
    },
    blinking: {
      animation: 'blink 5s infinite',
      color: '#800080'
    }
  }

  return (
    <div style={retroStyles.container}>
      <div style={retroStyles.title}>
        <span style={retroStyles.blinking}>●</span> プロフィール <span style={retroStyles.blinking}>●</span>
      </div>
      
      <StaticImage
        src="../../images/MyIcon.jpg"
        alt="UserIcon"
        width={120}
        height={120}
        style={retroStyles.profileImage}
      />

      <table style={retroStyles.table}>
        <tr>
          <th style={retroStyles.th}>項目</th>
          <th style={retroStyles.th}>内容</th>
        </tr>
        <tr>
          <td style={retroStyles.td}>名前</td>
          <td style={retroStyles.td}>オーガスタロウ/Augustaro</td>
        </tr>
        <tr>
          <td style={retroStyles.td}>職業</td>
          <td style={retroStyles.td}>社会人4年目のエンジニア</td>
        </tr>
        <tr>
          <td style={retroStyles.td}>勉強中</td>
          <td style={retroStyles.td}>Go, TypeScript</td>
        </tr>
        <tr>
          <td style={retroStyles.td}>趣味</td>
          <td style={retroStyles.td}>冷水を浴びること</td>
        </tr>
      </table>

      <div style={retroStyles.description}>
        <strong>Who is Augustaro？</strong><br />
        社会人4年目の益荒男です。<br />
        Go,Ts勉強中！冷水を浴びるのが好きです。<br />
        よろしくお願いします⊂( `ᾥ´ )っ
      </div>

      <div style={retroStyles.linkSection}>
        <div style={retroStyles.linkTitle}>
          <span style={retroStyles.blinking}>★</span> SNS Links <span style={retroStyles.blinking}>★</span>
        </div>
        <a href={LINK_URLS.QIITA} style={retroStyles.link} target="_blank" rel="noopener noreferrer">
          [Qiita]
        </a>
        <a href={LINK_URLS.X} style={retroStyles.link} target="_blank" rel="noopener noreferrer">
          [Twitter/X]
        </a>
        <a href={LINK_URLS.GITHUB} style={retroStyles.link} target="_blank" rel="noopener noreferrer">
          [GitHub]
        </a>
      </div>
    </div>
  )
}

export default RetroUserCard