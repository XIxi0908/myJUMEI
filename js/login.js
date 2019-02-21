window.onload = function(){
	my$("#btn").onclick = function(){
		let xhr = new XMLHttpRequest();
		xhr.open("post","login.php",true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				console.log(xhr.responseText);
				if(xhr.responseText=="1"){
					// saveCookie("userPhone",my$("#userPhone").value,7);
					// saveCoaokie("passTxt",my$("#passTxt").value,7);
					alert("1111")
					location.href = "index.html";
					
				}else{
			              alert("222");     
			              location.href = "index.html";	
				}console.log(xhr.responseText);
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		let str = `userPhone=my${my$("#userPhone").value}&passTxt=my${my$("#passTxt").value}`;
		xhr.send(str); 
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