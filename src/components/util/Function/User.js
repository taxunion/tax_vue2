var User={
	$setToken:function(string){
		localStorage.setItem("token",string)
	},
	$getToken:function(string){
		return localStorage.getItem("token")
	},
}
export {
	User
}
