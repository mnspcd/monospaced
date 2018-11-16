<?php
ini_set("session.cookie_domain", ".monospaced.com");
session_start();
if(!array_key_exists('subdomains', $_SESSION)){
	header("location:/login/");
}
include '../_function/php/db.php';
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en-gb"><head>
<meta http-equiv="X-UA-Compatible" content="IE=7">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>Projects | Monospaced Ltd</title>
<meta name="description" content="London based web development consultancy, specialising in modern front-end web development, web standards and accessibility.">
<meta name="keywords" content="monospaced, monospaced ltd, monospaced.com">

<!--[if !IE 5]><!--><link rel="stylesheet" type="text/css" href="/_format/styles/projects.css"><!--<![endif]-->

</head><body>

	<div id="container">

		<div class="col">

			<?php
				print '<p id="nav-account"><span>Hello, <strong>'.$_SESSION[realname].'</strong></span> | ';
				print '<a href="/logout/">Log out</a></p>';

				print "<h1>Your projects</h1><ul>";

				// loop through the session array with foreach
				$urlParts = explode('.', $_SERVER['HTTP_HOST']);
				if($urlParts[0] == 'monospaced' && $urlParts[1] == 'com'){
					$domain = '.monospaced.com';
				} else {
					$domain = '.monospaced.local';
				}
				$subdomains = $_SESSION['subdomains'];
				asort($subdomains);
				foreach($subdomains as $key=>$value)
				{
					$sql="SELECT subdomains.path FROM subdomains WHERE subdomain='$value'";
					$result=mysql_query($sql);
					$row=mysql_fetch_assoc($result);
					$path=$row['path'];
					print '<li><a href="http://'.$value.$domain.$path.'">'.$value.'</a></li>';
				}
				print '</ul>';
			?>

			<!--
			<h2>KEY</h2>
			<ul class="amber">
		  	<li class="inactive">inactive</li>
		  	<li>HTML not started</li>
		  	<li class="red"><a href="/">HTML in progress, risk</a></li>
		  	<li><a href="/">HTML in progress</a></li>
		  	<li class="green"><a href="/">HTML complete</a></li>
		  </ul>
			-->

	  </div>

	</div>

</body></html>