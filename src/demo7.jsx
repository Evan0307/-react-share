import { Normal } from "./child1Demo7";
import { PubSubCommunicate } from "./child2Demo7";

/*
发布者订阅者跳过中间组件 Render 过程
*/

export default function App() {
  return (
    <div className="App">
      <h1>背景</h1>
      <div>
        用发布者订阅者解决数据透传。
        <br />
        例如：组件A和组件D使用组件A中的状态，而组件B只负责将状态从 A 传给 D。
      </div>

      <div
        style={{ display: "inline-block", width: "40%", marginRight: "20px" }}
      >
        <Normal />
      </div>
      <div style={{ display: "inline-block", width: "40%" }}>
        <PubSubCommunicate />
      </div>
    </div>
  );
}
