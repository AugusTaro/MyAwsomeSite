import React, { useState, useEffect } from "react"

const RetroCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0)
  const [todayCount, setTodayCount] = useState(0)

  useEffect(() => {
    // ダミーのカウンター数値を生成
    const baseVisitors = 12847
    const baseTodayVisitors = 123
    
    // 時間に基づいてランダムに変動させる
    const now = new Date()
    const timeVariation = Math.floor(now.getHours() * 2.3 + now.getMinutes() * 0.1)
    
    setVisitorCount(baseVisitors + timeVariation)
    setTodayCount(baseTodayVisitors + Math.floor(timeVariation / 10))
  }, [])

  const counterStyles = {
    container: {
      backgroundColor: '#f0f0e6',
      border: '2px inset #cccccc',
      padding: '15px',
      margin: '20px 0',
      textAlign: 'center',
      fontFamily: '"MS Gothic", "ＭＳ ゴシック", monospace'
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000080',
      marginBottom: '10px'
    },
    counter: {
      fontSize: '14px',
      margin: '5px 0'
    },
    number: {
      color: '#ff0000',
      fontWeight: 'bold',
      fontSize: '18px'
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
        <span style={counterStyles.blinking}>★</span> アクセスカウンター <span style={counterStyles.blinking}>★</span>
      </div>
      <div style={counterStyles.counter}>
        総訪問者数: <span style={counterStyles.number}>{visitorCount.toLocaleString()}</span>人
      </div>
      <div style={counterStyles.counter}>
        本日 <span style={counterStyles.number}>{todayCount}</span>人目のお客様です！
      </div>
      <div style={counterStyles.counter}>
        ♪ あなたのご訪問をお待ちしております ♪
      </div>
    </div>
  )
}

export default RetroCounter