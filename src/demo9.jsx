import { useEffect, useMemo, useState } from 'react';

// useMemo 返回虚拟 DOM 可跳过该组件 Render 过程



const renderCntMap = {}

function Comp({ name }) {
  renderCntMap[name] = (renderCntMap[name] || 0) + 1
  return (
    <div>
      组件「
      {name}」 Render 次数：
      {renderCntMap[name]}
    </div>
  )
}

export default function App() {
  const setCnt = useState(0)[1]
  useEffect(
    () => {
      const timer = window.setInterval(() => {
        setCnt(v => v + 1)
      }, 1000)
      return () => clearInterval(timer)
    },
    [setCnt]
  )

  const comp = useMemo(() => {
    return <Comp name="使用 useMemo 作为 children" />
  }, [])

  return (
    <div className="App">

        <h2>useMemo 返回虚拟 DOM 可跳过该组件 Render 过程</h2>
      <Comp name="直接作为 children" />
      {comp}
    </div>
  )
}
