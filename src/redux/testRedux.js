import {increment,decrement,reset} from './actions/counter';
import store from './store';

/* 手动编译 引入store */
function TestRedux(){
	// 打印初始状态
	console.log("初始状态",store.getState());
	// 每次state更新时，打印日志
	// 注意subscribe()返回一个函数来注销监听器
	let unsubscribe = store.subscribe(() => 
		console.log("注销监听",store.getState())
	);
	// 发起一系列action
	store.dispatch(increment());
	store.dispatch(decrement());
	store.dispatch(reset());
	// 停止监听state状态
	// unsubscribe();
}


export default  TestRedux;