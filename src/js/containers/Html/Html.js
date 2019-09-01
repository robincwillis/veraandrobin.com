import React, { Component } from 'react';
import Favicon from 'assets/images/favicon.png'
import TouchIcon from 'assets/images/touch-icon.png'

const Html = ({title, children, assets}) => (
	<html>
		<head>
			<meta charSet="UTF-8"/>
			<title> {title} </title>
			<link rel="stylesheet" type="text/css" href="/main.css"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
			<link rel="shortcut icon" type="image/png/ico" href={Favicon} />
			<link rel="apple-touch-icon" href={TouchIcon} />
		</head>
		<body>
			<div id="root"> {children} </div>
			<script src="/app.js" />
		</body>
	</html>
)

export default Html;
