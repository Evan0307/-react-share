import { useState, useEffect, createContext,  memo } from "react";

const renderCntMap = {};
const renderOnce = (name) => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1);
};

// 将需要公共访问的部分移动到 Context 中进行优化
// Context.Provider 就是发布者
// Context.Consumer 就是消费者
const ValueCtx = createContext();
const CtxContainer = ({ children }) => {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCnt((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCnt]);

  return <ValueCtx.Provider value={cnt}>{children}</ValueCtx.Provider>;
};

function CompA() {

  // 组件内使用 cnt
  return (
    <div>
      组件 CompA Render 次数：{renderOnce("CompA")}
      <CompB />
    </div>
  );
}

const CompB = memo(function CompB() {
  // B 组件不使用 cnt，
  // 只将数据透传给组件 D
  return (
    <div>
      组件 CompB Render 次数：{renderOnce("CompB")}
      <CompD />
    </div>
  );
});

const CompD = memo(function () {
  // 组件D使用 cnt
  return <div>组件 CompD Render 次数：{renderOnce("CompD")}</div>;
});

export const PubSubCommunicate = () => {
  return (
    <CtxContainer>
      <div>
        <h1>优化后场景</h1>
        <div>
          将状态提升至最低公共祖先的上层，用 CtxContainer 将其内容包裹。
        </div>
        <div style={{ marginTop: "20px" }}>
          每次状态更新时，只有组件A和组件B会再次执行 Render 过程。
        </div>

        <div style={{ marginTop: "40px" }}>
          父组件 Render 次数：{renderOnce("parent")}
        </div>
        <CompA />
      </div>
    </CtxContainer>
  );
};

export default PubSubCommunicate;
