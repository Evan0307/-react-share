import { useState, useEffect, memo } from "react";

const renderCntMap = {};
const renderOnce = (name) => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1);
};

function CompA() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCnt((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCnt]);

  return (
    <div>
      组件 CompA Render 次数：{renderOnce("CompA")}
      <CompB cnt={cnt} />
    </div>
  );
}

const CompB = memo(function CompB({ cnt }) {
  // B 组件不是用 cnt，只作为数据透传
  return (
    <div>
      组件 CompB Render 次数：{renderOnce("CompB")}
      <CompD cnt={cnt} />
    </div>
  );
});

const CompD = memo(function ({ cnt }) {
  // D 组件内使用 cnt
  return <div>组件 CompD Render 次数：{renderOnce("CompD")}</div>;
});

export const Normal = () => {
  return (
    <div>
      <h1>待优化场景</h1>
      <div>将状态提升至最低公共祖先。</div>
      <div style={{ marginTop: "20px" }}>
        每次状态更新时，父组件和各个子组件都会执行 Render 过程。
      </div>

      <div style={{ marginTop: "40px" }}>
        父组件 Render 次数：{renderOnce("parent")}
      </div>
      <CompA />
    </div>
  );
};

export default Normal;
