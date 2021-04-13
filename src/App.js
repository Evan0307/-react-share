import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ClassDemo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import ClassDemo4 from './demo4';
import ClassDemo5 from './demo5';
import ClassDemo6 from './demo6';
import ClassDemo7 from './demo7';
import ClassDemo8 from './demo8';
import ClassDemo9 from './demo9';
import ClassDemo10 from './demo10';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
         
          <li>
            <Link to="/classDemo1">demo1  PureComponent、React.memo浅比较优化 </Link>
          </li>
          <li>
            <Link to="/classDemo2">demo2 shouldComponentUpdate手动优化</Link>
          </li>
          <li>
            <Link to="/classDemo3">demo3 useMemo、useCallback 实现稳定的 Props 值</Link>
          </li>
          <li>
            <Link to="/classDemo4">demo4 列表项使用 key 属性</Link>
          </li>
          <li>
            <Link to="/classDemo5">demo5  批量更新，减少 Render 次数 </Link>
          </li>
          <li>
            <Link to="/classDemo6">demo6 按优先级更新，及时响应用户</Link>
          </li>
          <li>
            <Link to="/classDemo7">demo7 发布者订阅者跳过中间组件 Render 过程</Link>
          </li>
          <li>
            <Link to="/classDemo8">demo8 懒加载</Link>
          </li>
          <li>
            <Link to="/classDemo9">demo9  useMemo 返回虚拟 DOM 可跳过该组件 Render 过程</Link>
          </li>
          <li>
            <Link to="/classDemo10">Demo10 懒渲染优化</Link>
          </li>
        </ul>

        <hr />

        <Switch>
         <Route exact path="/classDemo1" >
         <ClassDemo1/>
         </Route>
          <Route  exact path="/classDemo2"  >
          <Demo2/>
          </Route>
          <Route  exact  path="/classDemo3" >
          <Demo3/>
          </Route>
          <Route  exact  path="/classDemo4" >
          <ClassDemo4/>
          </Route>
          <Route  exact  path="/classDemo5" >
            <ClassDemo5/>
          </Route>
          <Route  exact  path="/classDemo6" >
            <ClassDemo6/>
          </Route>
          <Route  exact  path="/classDemo7" >
            <ClassDemo7/>
          </Route>
          <Route  exact  path="/classDemo8" >
            <ClassDemo8/>
          </Route>
          <Route  exact  path="/classDemo9" >
            <ClassDemo9/>
          </Route>
          <Route  exact  path="/classDemo10" >
            <ClassDemo10/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




