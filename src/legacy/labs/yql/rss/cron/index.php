<?php
	$anywhereTitle = array(
  'http://feeds.feedburner.com/FSAllJobs?format=xml',
  'http://feeds.feedburner.com/MeFi/Jobs?format=xml'
	);
	$anywhereDesc = array(
  'http://jobs.37signals.com/jobs.rss',
  'http://www.authenticjobs.com/rss/index.xml',
  'http://jobs.jsninja.com/rss/all/index.xml',
  'http://feeds.feedburner.com/smjobs',
  'http://feeds.feedburner.com/python/pyjobo?format=xml',
  'http://feeds.feedburner.com/alldevjobs?format=xml',
  'http://jobs.webdirections.org/rss/all/jobs.rss',
  'https://weworkremotely.com/categories/1/jobs.rss',
  'https://weworkremotely.com/categories/2/jobs.rss',
  'https://weworkremotely.com/categories/3/jobs.rss',
  'https://weworkremotely.com/categories/4/jobs.rss',
  'https://weworkremotely.com/categories/5/jobs.rss',
  'https://weworkremotely.com/categories/6/jobs.rss'
	);
	$url ='http://query.yahooapis.com/v1/public/yql?q=';
	$query = 'select title,description,link,pubDate,date from rss where url in("'.implode('","',$anywhereTitle).'") and title like "%Anywhere%";';
	$query .= 'select title,description,link,pubDate,date from rss where url in("'.implode('","',$anywhereDesc).'") and description like "%Anywhere%";';
	$query = "select * from query.multi where queries='".$query."'";
	$url.=urlencode($query).'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&diagnostics=false';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($ch);
	curl_close($ch);
	$result = str_replace('"date"', '"pubDate"', $result);
  $data = json_decode($result);
  if ($data->query->results != null) {
	 file_put_contents('rss.json',$result);
	 copy('rss.json','../cache/rss.json');
  }
?>
