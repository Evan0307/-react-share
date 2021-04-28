
import React from "react";
import  {v4 as uuidv4} from 'uuid';


//列表项使用 key 属性 

const size=10000;
const arr1 = Array.from(Array(size),(k,index)=>({label:1+index,}));

const arr2 =  Array.from(Array(size),(k,index)=>({label:1+index,key:uuidv4(),})); 

function ParentDemo4() {


   console.log(arr1);
   console.log(arr2);

 return (
     <>
      {/* diff  过程  出现先后顺序，两次更新，一次创建 */}
      
     <h2>  列表未添加 key: </h2>
      <ul>
        {arr1.map(i=><li>{i.label}</li>)}
     </ul>


     <h2> 列表添加 key: </h2>
     <ul>
       {arr2.map(i=><li key={i.key}>{i.label}</li>)}
     </ul>


     






 {/* 使用唯一且稳定key diff  过程  创建 key 值为 2014 的虚拟 DOM。*/}
 {/* 相比于不使用 key 的代码，使用 key 节省了两次 DOM 更新操作。如果把例子中的 <li> 换成自定义组件，并且自定义组件使用了 PureComponent 或 React.memo 优化。 */}


{/* <!-- 前一次 Render 结果 --> */}
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

{/* <!-- 新的 Render 结果 --> */}
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>


     </>
 )

 }



 
 export default  ParentDemo4