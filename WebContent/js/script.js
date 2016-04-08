var markers = [];
var waypts = [];
var marker;
var myCenter = new google.maps.LatLng(10.822678, 106.686446);
var polyLinePath;
var geocoder = new google.maps.Geocoder();
var poly;
var map;
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var divDanhSachdc ;

var mapOptions = {
	center : myCenter,
	animation : google.maps.Animation.DROP,
	zoom : 12,
	mapTypeId : google.maps.MapTypeId.ROADMAP
};
function initialize() {
	// clear marker in map
	// clearOverlays();
	divDanhSachdc=document.getElementById("danhsachdiachi");
	divDanhSachdc.style.display = 'none'; // an danh sach khach hang

	// var summaryPanel = document.getElementById('directions-panel');
	// var contentTable = document.getElementById('contentTable');

	// summaryPanel.style.display = 'none';
	// contentTable.style.display = 'none';

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);

	document.getElementById('submit').addEventListener('click', function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	});
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var distance = 0;
	var checkboxArray = document.getElementById('waypoints');
	var selectedMode = document.getElementById('mode').value;
	for (var i = 0; i < checkboxArray.length; i++) {
		if (checkboxArray.options[i].selected) {
			waypts.push({
				location : checkboxArray[i].value,
				stopover : true
			});
		}
	}

	directionsService.route({
		origin : document.getElementById('start').value,
		destination : document.getElementById('end').value,
		waypoints : waypts,
		optimizeWaypoints : true,
		travelMode : google.maps.TravelMode[selectedMode]
	}, function(response, status) {
		if (status === google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];

			var summaryPanel = document.getElementById('directions-panel');
			var contentTable = document.getElementById('contentTable');
			summaryPanel.innerHTML = '';
			// For each route, display summary information.
			for (var i = 0; i < route.legs.length; i++) {
				var routeSegment = i + 1;
				summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment
						+ '</b><br>';
				summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
				summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
				summaryPanel.innerHTML += route.legs[i].distance.text + '<br>';
				contentTable.innerHTML += route.legs[i].distance.text + '<br>';
				+'<br><br>';
			}
			computeTotalDistance(response);
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}

function computeTotalDistance(result) {
	var totalDist = 0;
	var totalTime = 0;
	var myroute = result.routes[0];
	for (i = 0; i < myroute.legs.length; i++) {
		totalDist += myroute.legs[i].distance.value;
		totalTime += myroute.legs[i].duration.value;
	}
	totalDist = totalDist / 1000.
	document.getElementById("contentTable").innerHTML = "Total distance is: "
			+ totalDist + " km<br> " + "Total time is: "
			+ (totalTime / 60).toFixed(2) + " minutes";
}
function doRefesh() {
	var div = document.getElementById("danhsachdiachi");
	div.style.display = 'block';
	// initialize();
	// clearMarkers();
	// deleteMarkers();
}
function doTimer() {
	alert("Hello Word ! doTimer");
	divDanhSachdc=document.getElementById("danhsachdiachi");
	divDanhSachdc.style.display = 'block';
}
function doSearch() {
	alert("Hello Word ! doSearch");
	// calculateAndDisplayRoute(directionsService, directionsDisplay);
}
function doEdit() {
	// window.alert("doEdit");
	// var div = document.getElementById("danhsachdiachi");
	// div.style.display = 'none';
	var url = "address";
	doHttpEdit(url);
}

function doHttpEdit(url) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			parseAddrObj(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function parseAddrObj(ObjAddress) {
	var objAddr = JSON.parse(ObjAddress);
	var lengthAddr = objAddr.Addr.length;
	for (var i = 0; i < lengthAddr; i++) {
		markers[i] = objAddr.Addr[i].diachi;
		// setMarkerOnMap(markers[i]);
		// window.alert("Marker[i]: "+ markers[i]);
	}
	calculateAndDisplayRoute(directionsService, directionsDisplay, markers);
}
// function addLatLng(event) {
// var path = poly.getPath();
//
// path.push(event.latLng);
// // Add a new marker at the new plotted point on the polyline.
// var marker = new google.maps.Marker({
// position : event.latLng,
// title : 'Vi Tri:' + path.getLength() + " - toado: " + event.latLng,
// map : map
// });
// }
// function addMarker(location, address) {
// markers.push(marker);
//
// var maper = new google.maps.Marker({
// position : location,
// map : map,
// });
// var infowindow = new google.maps.InfoWindow();
// google.maps.event
// .addListener(
// maper,
// 'click',
// (function(marker) {
// return function() {
// geocoder
// .geocode(
// {
// 'address' : address
// },
// function(results, status) {
// if (status == google.maps.GeocoderStatus.OK) {
// var pos = results[0].geometry.location;
// map
// .setCenter(results[0].geometry.location);
// var marker = new google.maps.Marker(
// {
// map : map,
// position : results[0].geometry.location,
// name : address,
// animation : google.maps.Animation.DROP
// });
//
// window.alert("address: "
// + address);
// window.alert("pos: " + pos);
// var infowindow = new google.maps.InfoWindow(
// {
// content : '<b>'
// + address
// + '</b> <br\>'
// + pos
// });
//
// google.maps.event
// .addListener(
// marker,
// 'mouseover',
// function() {
// infowindow
// .open(
// map,
// marker);
// setTimeout(
// function() {
// infowindow
// .close();
// },
// '2000');
// });
// } else {
// alert("Geocode was not successful for the following reason: "
// + status);
// }
// });
//
// }
// })(maper));
// }
// function setMapOnAll(map) {
// for (var i = 0; i < markers.length; i++) {
// markers[i].setMap(map);
// }
// markers.length = 0;
// }
// function clearOverlays() {
// for (var i = 0; i < markers.length; i++) {
// markers[i].setMap(null);
// }
// markers.length = 0;
// for (var i = 0; i < waypts.length; i++) {
// waypts[i].setMap(null);
// }
// waypts.length = 0;
// }

// function clearMarkers() {
// setMapOnAll(null);
// }
//
// function showMarkers() {
// setMapOnAll(map);
// }
//
// function deleteMarkers() {
// clearMarkers();
// markers = [];
// waypts = [];
// alert("Delete markers finish...");
// }

// function calculateAndDisplayRoute(directionsService,
// directionsDisplay, markers) {
// var waypts = [];
// var distance = 0;
//
// var selectedMode = document.getElementById('mode').value;
// for (var i = 0; i < markers.length; i++) {
// waypts.push({
// location : markers[i],
// stopover : true
// });
// }
// directionsService.route({
// origin : document.getElementById('start').value,
// destination : document.getElementById('end').value,
// waypoints : waypts,
// optimizeWaypoints : true,
// travelMode : google.maps.TravelMode[selectedMode]
// }, function(response, status) {
// if (status === google.maps.DirectionsStatus.OK) {
// directionsDisplay.setDirections(response);
// var route = response.routes[0];
//
// var summaryPanel = document.getElementById('directions-panel');
// var contentTable = document.getElementById('contentTable');
// summaryPanel.innerHTML = '';
// // For each route, display summary information.
// for (var i = 0; i < route.legs.length; i++) {
// var routeSegment = i + 1;
// summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment
// + '</b><br>';
// summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
// summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
// summaryPanel.innerHTML += route.legs[i].distance.text + '<br>';
// contentTable.innerHTML += route.legs[i].distance.text + '<br>';
// +'<br><br>';
// }
// computeTotalDistance(response);
// } else {
// window.alert('Directions request failed due to ' + status);
// }
// });
// }

// function setMarkerOnMap(address) {
// geocoder.geocode({
// 'address' : address
// }, function(results, status) {
// if (status == google.maps.GeocoderStatus.OK) {
// var pos = results[0].geometry.location;
//
// map.setCenter(results[0].geometry.location);
// var marker = new google.maps.Marker({
// map : map,
// position : results[0].geometry.location,
// name : address,
// animation : google.maps.Animation.DROP
// });
// var infowindow = new google.maps.InfoWindow({
// content : '<b>' + address + '</b> <br\>' + pos
// });
//
// google.maps.event.addListener(marker, 'mouseover', function() {
// infowindow.open(map, marker);
// setTimeout(function() {
// infowindow.close();
// }, '2000');
//
// });
// } else {
// alert("Geocode was not successful for the following reason: "
// + status);
// }
// });
// }
