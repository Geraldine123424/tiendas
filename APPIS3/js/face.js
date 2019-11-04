<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append(new http\QueryString(array(
  'object_id' => 'https://www.facebook.com/settings?tab=account&section=username',
  'access_token' => 'https://www.facebook.com/venus.leon.5'
)));

$request->setRequestUrl('https://facebookgraphapiserg-osipchukv1.p.rapidapi.com/addComment');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'x-rapidapi-host' => 'FacebookGraphAPIserg-osipchukV1.p.rapidapi.com',
  'x-rapidapi-key' => '52926ab2d5mshf8e417a51e45ed8p10ab72jsn05b2d2adbc46',
  'content-type' => 'application/x-www-form-urlencoded'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();