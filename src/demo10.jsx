import React from 'react';
import { FixedSizeList as List } from 'react-window';

  /* 使用 react-window 很简单，只需要计算每项的高度即可。下面代码中每一项的高度是 35px。
        如果每项的高度是变化的，可给 itemSize 参数传一个函数 
         用于一次性渲染大量的数据
  */


const Row = ({ index, style }) => (
  <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
    Row {index}
  </div>
);

const Example = () => (
  <List
    className="List"
    height={150}
    itemCount={10000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
export default   Example;