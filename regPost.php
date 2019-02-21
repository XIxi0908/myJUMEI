<?php
	header("Content-type:text/html;charset=utf-8");
	//接
	$userPhone = $_POST['userPhone'];
	$passTxt = $_POST['passTxt'];
	//搭桥
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		echo '服务器端出错,数据库没有连接上';
	}else{
		mysql_select_db("jumei", $conn);
		$sqlStr = "insert into userinfo(userPhone,passTxt)
					values('$userPhone','$passTxt');";
		$result = mysql_query($sqlStr,$conn);
		mysql_close($conn);
		if($result==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>