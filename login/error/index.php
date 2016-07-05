<?php
ini_set("session.cookie_domain", ".monospaced.com");
session_start();
session_destroy();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en-gb"><head>
<meta http-equiv="X-UA-Compatible" content="IE=7">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=410">

<title>Error | Login | Monospaced Ltd</title>
<meta name="description" content="London based web development consultancy, specialising in modern front-end web development, web standards and accessibility.">
<meta name="keywords" content="monospaced, monospaced ltd, monospaced.com">

<!--[if !IE 5]><!--><link rel="stylesheet" type="text/css" href="/_format/styles/screen.css"><!--<![endif]-->
<!--[if gte IE 6]><link rel="stylesheet" type="text/css" href="/_format/styles/tweaks.css"><![endif]-->

</head><body><div id="distance"></div><div id="container">

<h1><a href="/">MONOSPACED LTD</a></h1>

<form method="post" action="/login/login.php">

	<div id="form-login" class="form-error">

		<p class="form-info">Sorry, incorrect username or password.</p>

		<p>
			<label for="myusername">Username</label>
			<input id="myusername" name="myusername" type="text" class="text">
		</p>

		<p>
			<label for="mypassword">Password</label>
			<input id="mypassword" name="mypassword" type="password" class="text">
		</p>

		<p class="btns"><input type="submit" class="submit" value="Log in"></p>

	</div>

</form>

</div></body></html>
