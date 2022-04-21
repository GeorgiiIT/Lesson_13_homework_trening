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