import React,{Component,Fragment} from "react";
import _ from 'lodash';
import  Immutable from 'immutable'


//immutable是一种持久化数据。一旦被创建就不会被修改。修改Immutable对象的时候返回新的Immutable。但是原数据不会改变。


// shouldComponentUpdate





    class Child1Demo2 extends Component{

     state={
         someData:{name:'apple'},
         otherData:Date.now(),
    }

        
        shouldComponentUpdate(nextProps,nextState){
            
            if(!_.isEqual(nextProps,this.props)|| !_.isEqual(nextState,this.state) ){
                 return true
            }

             if(nextState.otherData!==this.state.otherData){
                    return true
            }


               return false 
        }

        handleClick=()=>{
            this.setState({
                someData:{name:'apple1'},
                 otherData:Date.now(),

            })
        }


        render(){
           console.log('child1Demo2  渲染了')

             return(
                 <Fragment>
                     <button onClick={this.handleClick} > child1Demo2 </button> 
                 </Fragment>
             )
        }
  }


  class Child2Demo2 extends Component{
    state = {
           someData: Immutable.fromJS({  name:"Apple"})
        }
    
      shouldComponentUpdate(nextProps,nextState){
          if(!Immutable.is(nextState.someData,this.state.someData)){  return true }
           return false ;
         }

   handleClick=()=>{
       // const someData= this.state.someData.set('name','apple2')
        const someData= this.state.someData.set('name','Apple')
         this.setState({
                    someData,
                })
            }
            render(){
               console.log('child2Demo2  渲染了')
                 return(
                     <Fragment>
                        <button onClick={this.handleClick} > child2Demo2 </button> 
                     </Fragment>
                 )
            }
      }

 export default class ParentClassDemo2 extends Component {
      
    state={
        name:'classDemo2'
    }

  render(){
    const {name} = this.state;
    return ( <>
      <h1>{name}</h1> 
      

      {/* <Child1Demo2 /> */}
       <Child2Demo2/>

   {/* <A data="{data}">
       B 组件只使用了 data.a 和 data.b 

  <B data="{data}">
    C 组件只使用了 data.a   之后再用了 data.c
    <C data="{data}" />
  </B>
</A>
       */}

     </>)
  }

}







