
 import React ,{ Component, useState }  from 'react';
 import ReactDOM from 'react-dom';
   // 批量更新，减少 Render 次数

   // React 类组件中 setState 是同步的还是异步的？

   
 class ClassComponent extends Component {
     state = {
       value: 0,
       x:0,
     };
   
     // 该函数直接赋值给 onClick 回调，
     // 则属于 React 默认进行批处理更新的场景
     // 执行 setState 后不会更新 this.state 值，
     // 所以两次输出值相等
     handleClick = () => {
       console.log("==========开始执行 handleClick =========");
       console.log("执行前值为：", this.state.value);
       this.setState({ value: this.state.value + 1 });
       console.log("执行 setState 后值为：", this.state.value);
       console.log(
         "执行完 setState 后，DOM 中值为：",
         document.querySelector(".classValue").textContent
       );
     };
   
     // 这个函数给 onClick。加上了 setTimeout，使其成为异步执行
     // 不属于 React 默认进行批处理更新的场景
     // 执行 setState 后会立即出发组件更新流程
     // 等组件更新流程执行完后，
     // 才会回到 handleClick 继续执行后面的打印语句
     // 所以两次输出值相等
   
     // 注意到：DOM 值也是更新了的，说明提交阶段也被执行了。
     handleClickAsync = () => {
       setTimeout(() => {
         this.handleClick();
       });
     };

     handleMergeClick=()=>{
        this.setState({x: 1});
        this.setState({x: 2});
        this.setState({x: 3});
        console.log('x3',this.state.x);
        
        setTimeout(() => {
            this.setState({x: 4})
            this.setState({x: 5})
            this.setState({x: 6})
            console.log(this.state.x);


            // ReactDOM.unstable_batchedUpdates(() => {
            //     this.setState({x: 4})
            //     this.setState({x: 5})
            //     this.setState({x: 6})
            //     console.log(this.state.x);

            // })
        }, 0)
     }
   
     render() {
       return (
         <div>
           <fieldset>
             <legend>类组件</legend>
             当前值：<span className="classValue">{this.state.value}</span>
             <div style={{ marginTop: 20 }}>
               <button onClick={this.handleClick}>在回调函数中同步执行</button>
               <div style={{ marginTop: 20 }}>
                 <button onClick={this.handleClickAsync}>
                   在回调函数中异步执行
                 </button>
               </div>
             </div>


             <div style={{ marginTop: 20 }}>
                 <button onClick={this.handleMergeClick}>
                 合并操作
                 </button>
               </div>
           </fieldset>
         </div>
       );
     }
   };

   function FunctionComponent() {
    const [state, setState] = useState(0);
  
    /**
     * 函数中的 state 都是闭包引用的，所以一直都是旧值。
     *
     * 但 handleClick 中 DOM 中的值是旧值。
     * 而 handleClickAsync 中 DOM 中的值是新值。
     * */
    const handleClick = () => {
      console.log("==========开始执行 handleClick =========");
      console.log("执行前值为：", state);
      setState(state + 1);
      console.log("执行 setState 后值为：", state);
      console.log(
        "执行完 setState 后，DOM 中值为：",
        document.querySelector(".functionValue").textContent
      );
    };
  
    const handleClickAsync = () => {
      setTimeout(handleClick);
    };
  
    return (
      <div>
        <fieldset>
          <legend>函数组件</legend>
          当前值：<span className="functionValue">{state}</span>
          <div style={{ marginTop: 20 }}>
            <button onClick={handleClick}>在回调函数中同步执行</button>
            <div style={{ marginTop: 20 }}>
              <button onClick={handleClickAsync}>在回调函数中异步执行</button>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
  
   
   export default function App() {
     return (
       <div className="App">
         <ClassComponent />
   
         <div style={{ marginTop: 20 }}></div>
   
         <FunctionComponent />
       </div>
     );
   }
   


  /*
   在 React 管理的事件回调和生命周期中，setState 是异步的，
   而其他时候 setState 都是同步的。
   这个问题根本原因就是 React 在自己管理的事件回调和生命周期中，
   对于 setState 是批量更新的，而在其他时候是立即更新的。
   */

  //React没有控制权的情况有很多： setTimeout 、 Promise.then(fn), fetch回调，xhr网络回调等等。

    
