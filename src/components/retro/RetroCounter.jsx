import React, { useMemo } from "react"

const RetroCounter = ({ visitorCount = 0, error }) => {
  // データの読み込み状態
  const isLoading = visitorCount === 0 && !error
  
  // 表示用の訪問者数（エラー時のみダミー値）
  const displayVisitorCount = useMemo(() => {
    if (error) {
      const now = new Date()
      const timeVariation = Math.floor(now.getHours() * 2.3 + now.getMinutes() * 0.1)
      return 12847 + timeVariation
    }
    return visitorCount
  }, [visitorCount, error])

  const counterStyles = {
    container: {
      backgroundColor: '#f0f0e6',
      border: '2px inset #cccccc',
      padding: '15px',
      margin: '20px 0',
      textAlign: 'center',
      fontFamily: '"創英角ポップ体", "Souei Kaku Pop", "HGS創英角ポップ体", "Comic Sans MS", fantasy'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ff0000',
      marginBottom: '10px',
      textShadow: '2px 2px 0px #00ff00, -1px -1px 0px #ffff00',
      WebkitTextStroke: '1px #000000'
    },
    counter: {
      fontSize: '14px',
      margin: '5px 0',
      opacity: isLoading ? 0.3 : 1,
      transition: 'opacity 0.8s ease-in-out'
    },
    number: {
      color: '#0000ff',
      fontWeight: 'bold',
      fontSize: '20px',
      textShadow: '2px 2px 0px #ffff00, -1px -1px 0px #ff0000',
      WebkitTextStroke: '1px #000000',
      opacity: isLoading ? 0 : 1,
      transition: 'opacity 0.8s ease-in-out'
    },
    blinking: {
      animation: 'blink 4s infinite',
      color: '#ff6600'
    },
    gif: {
      width: '20px',
      height: '20px',
      display: 'inline-block',
      backgroundColor: '#ff0000',
      animation: 'rotate 8s infinite linear'
    }
  }

  return (
    <div style={counterStyles.container}>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={counterStyles.title}>
        <span style={counterStyles.blinking}>★</span> ようこそ！！ <span style={counterStyles.blinking}>★</span>
      </div>
      <div style={counterStyles.counter}>
        あなたは <span style={counterStyles.number}>
          {isLoading ? "---" : displayVisitorCount.toLocaleString()}
        </span>番目の訪問者です！
      </div>
      <div style={counterStyles.counter}>
        ♪ ご訪問ありがとうございます ♪
      </div>
    </div>
  )
}

export default RetroCounter