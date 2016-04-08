<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link href="css/style_sheet.css" rel="stylesheet" type="text/css" />
</head>
<body id=homeview>

	<jsp:include page="_header.jsp"></jsp:include>
	<%-- <jsp:include page="_menu.jsp"></jsp:include> --%>
	<h2
		style="text-align: center; color: white; font-size: 35px; text-shadow: 1px 2px 3px #121213;">Account
		Login</h2>


	<div id=loginView_form>
		<form method="POST" action="doLogin">
			<table>
				<tr>
					<td>User Name</td>
					<td><input type="text" name="userName"
						value="${user.userName}" /></td>
				</tr>
				<tr>
					<td>Password</td>
					<td><input type="password" name="password"
						value="${user.password}" /></td>
				</tr>
				<tr>
					<td>Remember me</td>
					<td><input type="checkbox" name="rememberMe" value="Y" /></td>
				</tr>
				<tr>
					<td colspan="2" style="text-align: center;"><input
						class="myButton" type="submit" value="LOGIN" /></td>
				</tr>
			</table>

		</form>
		<p style="color: red;">${errorString}</p>
	</div>
</body>
</html>