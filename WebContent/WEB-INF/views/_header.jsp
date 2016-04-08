<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div>
	<div>
		<a href="${pageContext.request.contextPath}/map"
			style="text-shadow: 1px 2px 3px #121213;text-align: left; color: white; text-decoration: none; float: left; font-size: 30px; font-weight: bold; font-family: cursive;">
			Shipper Routing </a>
		<p class="myLogout"  style="text-align: right; padding-right: 10px;">
			Hello <b>${loginedUser.userName}</b> <br /> <a
				href="${pageContext.request.contextPath}/doLogout"
				style="text-align: right; font-size: 13px; font-weight: bold; text-decoration: blink; color:white;">LogOut</a>
		</p>
	</div>
</div>