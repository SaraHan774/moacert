import React from 'react'
import { RootStateOrAny } from 'react-redux';

interface LoadingBarProps {
    isLoading: boolean; 
}
// state - DONE / LOADING / ERROR 
const LoadingBar : React.FunctionComponent<LoadingBarProps>= (props) => {
    // animate this 
    return <div>Loading ... </div>
}

export default LoadingBar; 

// insert network requests into a queue 
// whenever the queue is not empty, show this loading bar on the screen 

// NetworkRequestQueue - make this global using redux 

class NetworkRequestQueue<T> {

    queue: Array<Promise<T>> = []
    name: string = "" 

    constructor(name: string = "NetworkRequestQueue") {
        this.name = name 
    }

    addJob(job: Promise<T>) {
        this.queue.push(job)
    }

    removeJob() {
        this.queue.shift()
    }

}

// function createStore(reducer: Any, initialState: RootStateOrAny) {
//     let state = initialState 
//     const listeners = []

//     const subscribe = (listener) => {
//         listeners.push(listener)
//     }

//     const getState = () => (state)

//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach(l => l())
//     }

//     return {
//         subscribe, getState, dispatch 
//     }
// } 

// const store = configureStore()

// function reducer(state, action) {
//     if(action.type === 'ADD') {
//         return {
//             messages: state.messages.concat(action.messages)
//         }
//     }
// }

// interface MessageState {
//     content : string 
// }

// const initialState: MessageState = { content : "" }

// const store = createStore(reducer, initialState)

// class Messages extends React.Component {
//     componentDidMount() {
//         store.subscribe(() => this.forceUpdate())
//     }

//     render() {
//         const messages = store.getState().messages 
//         return (
//             <div>{messages}</div>
//         )
//     }
// }