import React,{useState,useMemo} from "react";


const renderCntMap = {};

 //useMemo、useCallback 实现稳定的 Props 值


 // useMemo 减少组件 Render 过程耗时    ，
 // 当它的依赖未发生改变时，就不会触发重新计算。一般用在「计算派生状态的代码」非常耗时的场景中，
  // 如：遍历大列表做统计信息。  多次缓存 可参考  memoizee  



 const Child1Demo3 = React.memo(({otherName,childName})=>{
     

    renderCntMap[childName] = (renderCntMap[childName] || 0) + 1
     console.log(renderCntMap.nameComponent);

    console.log(`name 子组件  渲染le`)
  return (
  <>
  <br/>
   {otherName}
   <br/>
   {childName} Render 次数：{renderCntMap[childName]}
  </>)

   });


   const Child2Demo3 = React.memo(({handleChangeContent,childName})=>{

    renderCntMap[childName] = (renderCntMap[childName] || 0) + 1
    console.log(`content  子组件  渲染了`);

  return (
  <>
  <br/>
  <br/>
  <br/>
  <br/>
   <button onClick={handleChangeContent}>刷新content</button>
   <br/>

   {childName} Render 次数：{renderCntMap[childName]}
  </>)

   });



 function ParentDemo3() {

    const [name, setName] = useState('名称');
   const [content,setContent] = useState('内容');

    const changeName=()=>{
        setName(new Date().getTime())
    };

    const  changeContent=()=>{
        setContent(new Date().getTime())
    }

    const handleChangeContent = React.useCallback(()=>{
        setContent(new Date().getTime())
    },[content])


    const otherName =  useMemo(()=>{
        return `name:${name},content:${content}`  // 
    },[name]);


  return (
      <>
        <button onClick={changeName }>name</button>
        <button onClick={changeContent}>content</button>
        <Child1Demo3 otherName={otherName}  childName={'nameComponent'}  /> 
        <Child2Demo3 handleChangeContent={handleChangeContent}  childName={'contentComponent'}  /> 
      </>
  )
}


  export default  ParentDemo3