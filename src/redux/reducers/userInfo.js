import {GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FALL} from '../actions/userInfo.js';

// 初始化

const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
}

export default function reducer (state = initState,action){
	switch (action.type){
		case GET_USER_INFO_REQUEST:
			return{
				// ...state 保证其他state更新；是和别人的object.assign()起同一个作用
				...state,
				isLoading: true,
				userInfo: {},
				errorMsg: ''
			};
		case GET_USER_INFO_SUCCESS:
			return {
				...state,
				isLoading: false,
				userInfo: action.userInfo,
				errorMsg: false
			};
		default:
			return state;
	}
}