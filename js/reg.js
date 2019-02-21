window.onload = ()=>{
		my$("#dynamic_mobile").onblur = function(){
			let xhr = new XMLHttpRequest();
			xhr.open("get","regGet.php?userPhone="+this.value,true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					if(xhr.responseText=="0"){
						my$("#dynamic_mobile").innerHTML = "No-go";
					}else{
						my$("#dynamic_mobile").innerHTML = "okay";
					}
				}
			}
			xhr.send();
		}
		my$("#btn").onclick = function(){
			let xhr = new XMLHttpRequest();
			xhr.open("post","regPost.php",true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="1"){
						location.href = "login.html";
					}else{
						window.close();
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
			let str = `userPhone=my${my$("#dynamic_mobile").value}&passTxt=my${my$("#passTxt").value}`;
			xhr.send(str);


			/*ajaxByObjAndPromise({
				"url":"regcssSave.php",
				"param":"username="+this.value
			}).then(
				function(str){
					let sexs = my$("usersex");
					let sex = "女";
					if(sexs[0]=="checked"){
						sexs = "男";
					}
					if(str=="1"){
						let str = `username=my${my$("#nameTxt").value}&userpass=my${my$("#passTxt").value}&usersex=my${sex}&userage=my${my$("#ageTxt").value}&userphone=my${my$("#telephone").value}`;
						ajaxByObjAndPromise({
							"method":"post",
							"url":"regPost.php",
							"param":str
						})
					}
				},function(str){
					if(str==404){
						location.href = "404.html";
					}else if(str==500){
						location.href = "500.html";
					}else{
						alert("呀~服务器出错了");
					}
				}
			)*/
		}
	}

	function my$(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}