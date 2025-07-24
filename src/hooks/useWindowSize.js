import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // SSR対応のためのチェック
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // 初期値設定
      handleResize()

      // リサイズイベントリスナー追加
      window.addEventListener("resize", handleResize)

      // クリーンアップ
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize