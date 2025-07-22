import React from "react"

const RetroContentCard = ({ title, describe, link }) => {
  const retroStyles = {
    container: {
      border: '2px solid #808080',
      backgroundColor: '#f5f5e6',
      padding: '15px',
      margin: '15px 0',
      boxShadow: '3px 3px 0px #666666'
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000080',
      textAlign: 'center',
      margin: '0 0 10px 0',
      textDecoration: 'underline'
    },
    description: {
      fontSize: '12px',
      margin: '10px 0',
      lineHeight: '1.5',
      textAlign: 'left'
    },
    buttonContainer: {
      textAlign: 'center',
      margin: '15px 0'
    },
    button: {
      backgroundColor: '#cccccc',
      border: '2px outset #cccccc',
      padding: '8px 15px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#000000',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#dddddd'
    },
    blinking: {
      animation: 'blink 6s infinite',
      color: '#800080'
    },
    construction: {
      backgroundColor: '#ffff00',
      border: '1px solid #ff0000',
      padding: '5px',
      textAlign: 'center',
      fontSize: '11px',
      margin: '5px 0',
      fontWeight: 'bold'
    }
  }

  return (
    <div style={retroStyles.container}>
      <h2 style={retroStyles.title}>
        <span style={retroStyles.blinking}>☆</span> {title} <span style={retroStyles.blinking}>☆</span>
      </h2>
      
      <p style={retroStyles.description}>
        {describe}
      </p>
      
      <div style={retroStyles.buttonContainer}>
        <a 
          href={link} 
          style={retroStyles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = '#dddddd'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#cccccc'}
        >
          ＞＞ ENTER ＜＜
        </a>
      </div>
      
      <div style={retroStyles.construction}>
        工事中 随時更新予定 工事中
      </div>
    </div>
  )
}

export default RetroContentCard