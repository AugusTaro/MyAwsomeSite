import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LINK_URLS } from "../../constants/linkURLs"

const RetroUserCard = () => {
  const retroStyles = {
    container: {
      border: "3px outset #cccccc",
      backgroundColor: "#f8f8f0",
      padding: "20px",
      margin: "20px 0",
      boxShadow: "5px 5px 0px #999999",
    },
    table: {
      width: "100%",
      border: "2px inset #808080",
      borderCollapse: "collapse",
      fontFamily:
        '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy',
      fontSize: "11px",
    },
    th: {
      backgroundColor: "#c0c0c0",
      border: "1px inset #808080",
      padding: "6px",
      textAlign: "center",
      fontWeight: "normal",
    },
    td: {
      border: "1px inset #808080",
      padding: "6px",
      textAlign: "center",
    },
    profileImage: {
      display: "block",
      margin: "0 auto 15px",
      border: "3px inset #cccccc",
      borderRadius: "10px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#ff0000",
      textAlign: "center",
      margin: "15px 0",
      textShadow: "3px 3px 0px #0000ff, -1px -1px 0px #ffff00",
      WebkitTextStroke: "1px #000000",
    },
    description: {
      fontSize: "14px",
      lineHeight: "1.6",
      margin: "15px 0",
      textAlign: "left",
    },
    linkSection: {
      backgroundColor: "#eeeedc",
      border: "2px inset #cccccc",
      padding: "10px",
      margin: "15px 0",
    },
    linkTitle: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#00ff00",
      marginBottom: "10px",
      textShadow: "2px 2px 0px #ff00ff, -1px -1px 0px #000000",
      WebkitTextStroke: "1px #000000",
    },
    link: {
      color: "#0000ff",
      textDecoration: "underline",
      margin: "0 10px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    blinking: {
      animation: "blink 5s infinite",
      color: "#800080",
    },
  }

  return (
    <div style={retroStyles.container}>
      <div style={retroStyles.title}>
        <span style={retroStyles.blinking}>★</span> プロフィール{" "}
        <span style={retroStyles.blinking}>★</span>
      </div>

      <StaticImage
        src="https://images.microcms-assets.io/assets/2c75ba332789475395c0cca2e265d0de/13f97ea87e1849e49d4c9b0297a5af32/water_simple_.png"
        alt="UserIcon"
        width={150}
        height={150}
        style={retroStyles.profileImage}
        placeholder="blurred"
        layout="fixed"
      />

      <div
        style={{
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#000080",
          margin: "10px 0 20px",
          fontFamily:
            '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy',
        }}
      >
        オーガスタロウ/Augustaro
      </div>

      <div style={retroStyles.description}>
        <strong>Who is Augustaro？</strong>
        <br />
        software engineerの益荒男です。
        <br />
        冷水を浴びるのが好きです。
        <br />
        よろしくお願いします⊂( `ᾥ´ )っ
      </div>

      <div style={retroStyles.linkSection}>
        <div style={retroStyles.linkTitle}>
          <span style={retroStyles.blinking}>★</span> SNS Links{" "}
          <span style={retroStyles.blinking}>★</span>
        </div>
        <a
          href={LINK_URLS.X}
          style={retroStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          [Twitter/X]
        </a>
        <a
          href={LINK_URLS.GITHUB}
          style={retroStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          [GitHub]
        </a>
        <a
          href={LINK_URLS.ZENN}
          style={retroStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          [Zenn]
        </a>
        <a
          href={LINK_URLS.QIITA}
          style={retroStyles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          [Qiita]
        </a>
      </div>
    </div>
  )
}

export default RetroUserCard
