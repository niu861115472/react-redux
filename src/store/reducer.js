const defaultState = {
    inputVal: 'jsniu',
    list: []
}

export default (state = defaultState, action) => {
    if (action.type === 'change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    if(action.type === 'add_item') {
        let newState = JSON.parse(JSON.stringify(state))
        if(newState.inputVal == '') return newState
        
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }
    if(action.type === 'delete_item') {
        let newState = JSON.parse(JSON.stringify(state))
        
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}