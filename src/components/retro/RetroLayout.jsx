import React from "react"

const RetroLayout = ({ children, title = "オーガスタロウの館" }) => {
  const retroStyles = {
    body: {
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy, sans-serif',
      backgroundColor: '#c0c0c0',
      color: '#000000',
      margin: 0,
      padding: '20px',
      fontSize: '13px',
      lineHeight: '1.4'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f5f5dc',
      border: '2px inset #808080',
      padding: '20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      borderBottom: '1px solid #000000',
      paddingBottom: '15px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '15px 0',
      color: '#ff0000',
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy',
      textShadow: '3px 3px 0px #0000ff, -1px -1px 0px #ffff00, 1px -1px 0px #ffff00, -1px 1px 0px #ffff00, 1px 1px 0px #ffff00',
      WebkitTextStroke: '1px #000000',
      textStroke: '1px #000000'
    },
    blinking: {
      animation: 'blink 3s infinite',
      color: '#00ff00',
      fontWeight: 'bold',
      textShadow: '2px 2px 0px #ff00ff, -1px -1px 0px #000000',
      WebkitTextStroke: '1px #000000'
    },
    link: {
      color: '#0000ff',
      textDecoration: 'underline'
    },
    hr: {
      border: 'none',
      borderTop: '1px solid #000000',
      margin: '20px 0'
    },
    footer: {
      textAlign: 'center',
      marginTop: '30px',
      fontSize: '12px',
      color: '#666666'
    },
    lastUpdate: {
      textAlign: 'right',
      fontSize: '11px',
      color: '#666666',
      fontStyle: 'italic'
    }
  }

  return (
    <div style={retroStyles.body}>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            70% { opacity: 1; }
            80% { opacity: 0.3; }
            90% { opacity: 1; }
            100% { opacity: 1; }
          }
          a:visited {
            color: #800080;
          }
          * {
            font-family: "創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy, sans-serif !important;
          }
        `}
      </style>
      <div style={retroStyles.container}>
        <div style={retroStyles.header}>
          <h1 style={retroStyles.title}>{title}へようこそ</h1>
          <div style={retroStyles.blinking}>★ Welcome to Retro Web ★</div>
        </div>
        
        {children}
        
        <hr style={retroStyles.hr} />
        <div style={retroStyles.footer}>
          <p>
            <span style={retroStyles.blinking}>⚡</span>
            {" "}このページは個人的なホームページです{" "}
            <span style={retroStyles.blinking}>⚡</span>
          </p>
          <p>
            <a href="mailto:contact@augustaro.com" style={retroStyles.link}>
              Webmaster: オーガスタロウ
            </a>
          </p>
        </div>
        <div style={retroStyles.lastUpdate}>
          最終更新日: {new Date().toLocaleDateString('ja-JP')}
        </div>
      </div>
    </div>
  )
}

export default RetroLayout