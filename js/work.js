


do {
	user.password =  prompt (`Enter user password`);
	if(isNaN(user.password) || !user.password || user.password.length < 6){
		 alert (user.validatePassword());
	  }
	} while (isNaN(user.password) || !user.password || user.password.length < 6 )
	alert (user.validatePassword());