import React from "react"
import useWindowSize from "../../hooks/useWindowSize"

const RetroLayout = ({ children, title = "オーガスタロウの館" }) => {
  const { width } = useWindowSize()
  const isPC = width >= 1024 // 1024px以上をPC版とする
  const retroStyles = {
    body: {
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy, sans-serif',
      backgroundColor: '#c0c0c0',
      color: '#000000',
      margin: 0,
      padding: isPC ? '0' : '20px',
      fontSize: '13px',
      lineHeight: '1.4'
    },
    container: isPC ? {
      width: '100%',
      maxWidth: 'none',
      margin: 0,
      backgroundColor: '#f5f5dc',
      border: 'none',
      padding: '0',
      display: 'block',
      height: 'auto'
    } : {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f5f5dc',
      border: '2px inset #808080',
      padding: '20px'
    },
    header: isPC ? {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: '#f5f5dc',
      border: '2px inset #808080',
      textAlign: 'center',
      padding: '15px',
      marginBottom: 0,
      borderBottom: '2px solid #000000'
    } : {
      textAlign: 'center',
      marginBottom: '20px',
      borderBottom: '1px solid #000000',
      paddingBottom: '15px'
    },
    contentWrapper: isPC ? {
      marginTop: '120px', // ヘッダーの高さ分だけマージンを追加
      display: 'table',
      width: '100%',
      backgroundColor: '#f5f5dc',
      border: '2px inset #808080',
      padding: '10px'
    } : {},
    mainContent: isPC ? {
      display: 'table-cell',
      width: '70%',
      padding: '20px',
      verticalAlign: 'top'
    } : {},
    sidebar: isPC ? {
      display: 'table-cell',
      width: '30%',
      padding: '20px',
      backgroundColor: '#e6e6e6',
      border: '2px inset #cccccc',
      verticalAlign: 'top'
    } : { display: 'none' },
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
          <div style={retroStyles.blinking}>★ Welcome to Augustaro's YAKATA ★</div>
        </div>
        
        {isPC ? (
          <div style={retroStyles.contentWrapper}>
            <div style={retroStyles.mainContent}>
              {children}
            </div>
            <div style={retroStyles.sidebar}>
              <div style={{ ...retroStyles.title, fontSize: '16px', marginBottom: '15px' }}>
                <span style={retroStyles.blinking}>★</span> サイドメニュー <span style={retroStyles.blinking}>★</span>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: '#000080' }}>
                  ◆ サイト情報
                </div>
                <div style={{ fontSize: '10px', lineHeight: '1.5' }}>
                  ・開設日: 1999年1月1日<br />
                  ・管理人: オーガスタロウ<br />
                  ・更新頻度: 気分次第<br />
                  ・推奨ブラウザ: IE4.0以上
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: '#000080' }}>
                  ◆ おすすめリンク
                </div>
                <div style={{ fontSize: '10px', lineHeight: '1.8' }}>
                  <a href="#" style={retroStyles.link}>・阿部寛のホームページ</a><br />
                  <a href="#" style={retroStyles.link}>・90年代風サイト集</a><br />
                  <a href="#" style={retroStyles.link}>・レトロWeb同盟</a><br />
                  <a href="#" style={retroStyles.link}>・懐かしのGIFアニメ</a>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: '#000080' }}>
                  ◆ 最近の更新
                </div>
                <div style={{ fontSize: '9px', lineHeight: '1.5' }}>
                  1999/12/31: レトロページ追加<br />
                  1999/12/25: カウンター設置<br />
                  1999/12/20: プロフィール更新<br />
                  1999/12/15: デザイン変更
                </div>
              </div>

              <div style={{
                backgroundColor: '#ffffcc',
                border: '1px solid #ff0000',
                padding: '8px',
                fontSize: '9px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#ff0000', fontWeight: 'bold' }}>
                  ※ このサイトはInternet Explorer 4.0以上でご覧ください
                </div>
              </div>
            </div>
          </div>
        ) : (
          children
        )}
        
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