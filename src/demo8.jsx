import { lazy, Suspense, Component } from 'react';
  
/* 懒加载  在 SPA 中，懒加载优化一般用于从一个路由跳转到另一个路由。
还可用于用户操作后才展示的复杂组件，比如点击按钮后展示的弹窗模块（有时候弹窗就是一个复杂页面 😌）。
*/

// 对加载失败进行容错处理
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>这里处理出错场景</h1>
    }
    return this.props.children
  }
}

const Comp = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject('模拟网络出错')
      } else {
        resolve(import('./demo1.jsx'))
      }
    }, 2000)
  })
})

export default function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        实现懒加载优化时，不仅要考虑加载态，还需要对加载失败进行容错处理。
      </div>
      <ErrorBoundary>
        <Suspense fallback="Loading...">
          <Comp />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}