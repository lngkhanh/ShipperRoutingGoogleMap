<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="select"%>
<!DOCTYPE html>
<html>
<head>
<title>Map API Google NgocKhanhLe</title>
<link href="css/style_sheet.css" rel="stylesheet" type="text/css" />
<script type="text/javascript"
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASxdPzoprKu6vtP5N5DIjqqfHuUaHixhQ&language=vi">
	
</script>
<script type="text/javascript" src="js/script.js"></script>
</head>
<body id=homeview onload="initialize()">
	<div id="container">

		<div id="header">
			<jsp:include page="_header.jsp"></jsp:include>
		</div>

		<div id="main">
			<div class="sidebar"
				style="font-size: 18px; font-family: monospace; padding-left: 10px;">
				<p
					style="color: black; font-size: 20px; font-family: monospace; font-weight: bold; text-align: center;">INFORMATTION
					MAP</p>
				<div style="text-align: center;">
					<input id=btRefresh type="image" src="images/Refresh.png" onclick="doRefesh()"> 
					<input id=btEdit type="image" src="images/Edit.png" onclick="doEdit()"> 
					<input id=btSearch type="image" src="images/Search.png" onclick="doSearch()"> 
					<input id=btSearch type="image" src="images/Timer.png" onclick="doTimer()">
				</div>
				<div id=danhsachdiachi>
						<div>
							<b>Start:</b> <select id="start">
								<option
									value="Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh">Kho
									Hang 1</option>
								<option value="quang trung, go vap">Kho Hang 2</option>
							</select>
						</div>
						<div>
							<b>DanhSachKH:</b><br /> <select multiple id="waypoints"
								style="width: 400px; height: 200px;">
								<c:forEach items="${KhachhangList}" var="kh">
									<option value="${kh.diachi}">${kh.diachi}</option>
								</c:forEach>
							</select>
						</div>
						<div>
							<b>End:</b> <select id="end">
								<option
									value="Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh">Kho
									Hang 1</option>
								<option value="quang trung, go vap">Kho Hang 2</option>
							</select> <br> <input type="submit" id="submit">
						</div>
						<div>
							<b>Mode:</b> <select id="mode">
								<option value="DRIVING">Driving</option>
								<option value="WALKING">Walking</option>
								<option value="BICYCLING">Bicycling</option>
								<option value="TRANSIT">Transit</option>
							</select>
						</div>
						<div id=directions-panel></div>
					</div>
			</div>
			<div class="content">
				<div id="map-canvas"></div>
			</div>


			<div id="contentTable">
			</div>

			<div class="clear"></div>
		</div>


		<div id="footer">
			<jsp:include page="_footer.jsp"></jsp:include>
		</div>
	</div>
</body>
</html>