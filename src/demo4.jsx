


import React from "react";


//列表项使用 key 属性 

function ParentDemo4() {

 


 return (
     <>
      {/* diff  过程  出现先后顺序，两次更新，一次创建 */}
{/* <!-- 前一次 Render 结果 --> */}
<ul>
  <li>Duke</li>
  <li>Villanova</li>                           
</ul>

{/* <!-- 新的 Render 结果 --> */}
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
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