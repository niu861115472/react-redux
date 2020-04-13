import React, { Component } from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
    let { inputVal, inputChange, clickBtn, deleteItem, list } = props
    return (
        <div>
            <div>
                <input
                    value={inputVal}
                    onChange={inputChange}
                    type="text" />
                <button onClick={clickBtn}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index + item}
                                onClick={() => deleteItem(index)}
                            >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const storeDefaultProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickBtn() {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item'
            }
            console.log(index)
            dispatch(action)
        }
    }
}

export default connect(storeDefaultProps, dispatchToProps)(TodoList);