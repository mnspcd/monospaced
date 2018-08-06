<?php
ob_start();
include '../_function/php/db.php';

// Define $myusername and $mypassword
$myusername=$_POST['myusername'];
$mypassword=$_POST['mypassword'];

// encrypt password
$encrypted_mypassword=md5($mypassword);

// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);

$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and user_password='$encrypted_mypassword'";
$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);
// If result matched $myusername and $mypassword, table row must be 1 row

if($count==1){
// Register $myusername, $mypassword and redirect to file "login_success.php"
$row = mysql_fetch_assoc($result);
$realname = $row['realname'];
$user_id = $row['id'];
$map_sql="SELECT subdomains.subdomain FROM subdomains INNER JOIN permissions ON subdomains.id = permissions.subdomain_id WHERE permissions.member_id = $user_id";
$map_result=mysql_query($map_sql);
$map_stack=array();
while($row = mysql_fetch_array($map_result)){
	array_push($map_stack, "$row[subdomain]");
}
ini_set("session.cookie_domain", ".monospaced.com");
session_start();
$_SESSION['realname'] = $realname;
$_SESSION['subdomains'] = $map_stack;
header("location:/projects/");
}
else {
header("location:/login/error/");
}

ob_end_flush();
?>