import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Key Usage Sample</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count UP!
        </button>
        {/* key プロパティを指定 */}
        <CountMonitor key={`counter-${count}`} count={count} />
      </div>
    </>
  )
}

// これは実際には外部ライブラリ内のコード
const CountMonitor = (props: { count: number }) => {
  const displayNumber = useState(props.count)

  return (
    <>
      <div className="card">
        現在のカウントは「<>{displayNumber}</>」です。
      </div>
    </>
  )
}

export default App
