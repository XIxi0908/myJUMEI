<?php
	header("Content-type:text/html;charset=utf-8");
	$userPhone = $_GET['userPhone'];

	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		echo '服务器端出错,数据库没有连接上';
	}else{
		mysql_select_db('jumei',$conn);
		$sqlStr = "select * from userinfo where userPhone = '$userPhone' ";
		$result = mysql_query($sqlStr,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==1){
			echo "0";
		}else{
			echo "1";
		}
	}
?>