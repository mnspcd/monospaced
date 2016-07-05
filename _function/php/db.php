<?php
$urlParts = explode('.', $_SERVER['HTTP_HOST']);
if($urlParts[0] == 'monospaced' && $urlParts[1] == 'com'){
	$host="localhost"; // Host name
	$username="monospaced_test"; // Mysql username
	$password="rast@FAR1"; // Mysql password
	$db_name="monospaced_test"; // Database name
	$tbl_name="members"; // Table name
} else {
	$host="localhost"; // Host name
	$username="root"; // Mysql username
	$password=""; // Mysql password
	$db_name="test"; // Database name
	$tbl_name="members"; // Table name
}
// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect");
mysql_select_db("$db_name")or die("cannot select DB");
?>