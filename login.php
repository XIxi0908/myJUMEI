<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$userPhone = $_POST["userPhone"];
	$passTxt = $_POST["passTxt"];

	//2、处理数据
	//1.创建链接
	$conn = mysql_connect("localhost","root","root");
	//判断是否链接成功
	if(!$conn){
		echo "连接失败";
	}else{
		//选择数据库

		mysql_select_db("jumei",$conn);
		//传输数据
		$sqlstr = "select * from userinfo where userPhone='$userPhone' and passTxt='$passTxt'";
		//执行sql语句
		$result = mysql_query($sqlstr,$conn);
		//关闭数据库
		mysql_close($conn);
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>