export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/Get_USER_INFO_FAIL";

// 创建请求中，请求成功，请求失败 三个action创建函数
function getUserInfoRequest(){
	return{
		type: GET_USER_INFO_REQUEST
	}
}
function getUserInfoSuccess(userInfo){
	console.log("useInfo>>>>>>>",userInfo)
	return{
		type: GET_USER_INFO_SUCCESS,
		userInfo: userInfo
	}
}
function getUserInfoFail(){
	return{
		type: GET_USER_INFO_FAIL
	}
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function parseJSON(response) {
  return response.json();
}

export function getUserInfo(){
	return function(dispatch){
		dispatch(getUserInfoRequest());
		return fetch('/api/user.json',{
			method:'GET',
			mode:'cors',// 避免cors攻击
			credentials: 'include'
		})
		.then(checkStatus)
		.then(parseJSON)
		.then((data) => {
			console.log("data>>>>>>>>",data);
			dispatch(getUserInfoSuccess(data))
		})
		.catch(
			()=>{
				dispatch(getUserInfoFail());
			}
		)
	}
}