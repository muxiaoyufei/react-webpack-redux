import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
export default function combineReducers(state = {},action){
	console.log("state.counter>>>>>>>",counter)
	return{
		counter: counter(state.counter, action),
		userInfo: userInfo(state.userInfo,action)
	}
}