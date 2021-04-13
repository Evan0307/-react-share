import { useState, useEffect } from "react";
import VisibilityObserver, {
  useVisibilityObserver
} from "react-visibility-observer";

const VisibilityObserverChildren = ({ callback, children }) => {
  const { isVisible } = useVisibilityObserver();
  useEffect(() => {
    callback(isVisible);
  }, [callback, isVisible]);

  return <>{children}</>;
};

const LazyRender = () => {
  const [isRendered, setIsRendered] = useState(false);
  
    console.log(isRendered)
  if (!isRendered) {
    return (
      <VisibilityObserver rootMargin={"0px 0px 0px 0px"}>
        <VisibilityObserverChildren
          callback={(isVisible) => {
            if (isVisible) {
              setIsRendered(true);
            }
          }}
        >
          <span />
        </VisibilityObserverChildren>
      </VisibilityObserver>
    );
  }

  console.log("滚动到可视区域才渲染");
  return <div>我是 LazyRender 组件</div>;
};




export default function App() {
    return (
      <div className="App">
        <h1>通过 react-visibility-observer 实现懒渲染</h1>
        <div>注意当前 Console 中没有消息。当下拉到底部，Console 出现消息。</div>
        <div style={{ height: 2000, background: "mediumaquamarine" }}></div>
        <LazyRender />
      </div>
    );
  }


