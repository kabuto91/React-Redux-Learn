import React from 'react';
// import store from './store';
import {connect} from 'react-redux';

const TodoList = (props)=>{


            let {inputValue, inputChange, clickBtn, list} = props;
            return ( 
                <div>
                    <div>
                        <input value={inputValue} onChange={inputChange} />
                        <button onClick={clickBtn}>提交</button>
                    </div>
                    <ul>
                        {
                            list.map((item, index) =>{
                                return (
                                    <li key={index+item}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
             );


}

// class TodoList extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state=store.getState();
        
//     // }

//     // inputChange(e){
//     //     console.log(e.target.value);
//     // }
    

//     render() { 
//         let {inputValue, inputChange, clickBtn, list} = this.props;
//         return ( 
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={inputChange} />
//                     <button onClick={clickBtn}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) =>{
//                             return (
//                                 <li key={index+item}>{item}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//          );
//     }
// }


const stateToProps = (state) =>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            // console.log(e.target.value);
            let action = {
                type: 'change_input',
                value:e.target.value
            }
            dispatch(action);
        },
        clickBtn(){
            // console.log('click it');
            let action = {
                type: 'add_item'
            }
            dispatch(action);
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);