import React, { Fragment,Component,PureComponent,memo } from "react";



// PureComponent、React.memo   浅比较减少子组件 重复 render 


const  FunctionDemo1=memo(()=> {
     console.log('FunctionDemo1  渲染了')
    return (
      <div>
        <h2>FunctionDemo1</h2>
      </div>
    );
  });



  const  MemoFunctionDemo1=()=> {
    console.log('MemoFunctionDemo1  渲染了')
   return (
     <div>
       <h2>MemoFunctionDemo1</h2>
     </div>
   );
 };




//   class ChildDemo1 extends PureComponent{
    class ChildDemo1 extends Component{


        render(){
           console.log('childDemo1  渲染了')

             return(
                 <Fragment>
                     childDemo1
                 </Fragment>
             )

        }

  }



  class ClassDemo1 extends Component {
      
      state={
          name:'classDemo1'
      }

       handleClick=()=>{
           this.setState({
               name:'classDemo1'
           })
       }



    render(){
      const {name} = this.state;
   return ( <>
        <h1>{name}</h1> 
        <button onClick={this.handleClick}>点击刷新</button>
        
        <ChildDemo1/>
        <FunctionDemo1/>

        {/* <MemoFunctionDemo1/> */}

       </>)


    }



  }

  export  default   ClassDemo1;

  