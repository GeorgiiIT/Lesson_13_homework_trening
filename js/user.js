// let user = {
// 	login: ``,
// 	password: ``,
// 	validatePassword: function(){
		
// 		if (this.password.length >= 6){
// 			return `Добро пожаловать!`;
// 		} else{
// 			return `Пароль должен содержать не менее 6 символов и состоять только из чисел`;
// 		}
// 	}
// }
// user.password = `hello1234`;
// console.log(user.validatePassword());


let user = {
	login: ``,
	password: ``,
	validatePassword: function(){
		 if (isNaN(this.password) || !this.password || this.password.length < 6){
			  return `Пароль должен содержать не менее 6 символов и состоять только из чисел!`
			} else {
			  return `Добро пожаловать`
			}
	}
 }