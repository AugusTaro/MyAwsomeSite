import React from "react"

const RetroLayout = ({ children, title = "オーガスタロウの館" }) => {
  const retroStyles = {
    body: {
      fontFamily: 'Times New Roman, serif',
      backgroundColor: '#f0f0f0',
      color: '#000000',
      margin: 0,
      padding: '20px',
      fontSize: '14px',
      lineHeight: '1.4'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      border: '2px solid #000000',
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
      margin: '10px 0',
      color: '#000080'
    },
    blinking: {
      animation: 'blink 1s infinite',
      color: '#ff0000',
      fontWeight: 'bold'
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
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
          a:visited {
            color: #800080;
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