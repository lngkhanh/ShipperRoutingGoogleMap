package conn;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class QueryDataExample {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {

		
		
		//============================= DONHANG
		// tao ket noi database
		Connection conn = ConnectionUtils.getConnection();
		// tao doi tuong statment
		// Statement statement=conn.createStatement();
		// cau lenh sql
		// String sql="SELECT * FROM user_account";
		// String sql = "Select User_Name, Password, Gender from User_Account
		// where " + "User_Name = ? and password = ?";
		// String sql = "Delete product where code= ?";
		String sql = "select * from db_donhang";
		// thuc thi cau lenh sql
		// ResultSet rs=statement.executeQuery(sql1);
		PreparedStatement pstm = conn.prepareStatement(sql);
		// pstm.setString(1, "tom");
		// pstm.setString(2, "tom001");
		ResultSet rs = pstm.executeQuery();
		// duyet ket qua
		while (rs.next()) {
			String id = rs.getString(1);
			String ma = rs.getString(2);
			String lat = rs.getString(3);
			String lang = rs.getString(4);
			System.out.println("-----------------------");
			System.out.println("ID: " + id);
			System.out.println("MAKH: " + ma);
			System.out.println("LAT: " + lat);
			System.out.println("LANG: " + lang);

		}
		
		//============================= KHACHHANG
		
		// ------------------------------------
		String sql1 = "select * from db_khachhang";
		// thuc thi cau lenh sql
		// ResultSet rs=statement.executeQuery(sql1);
		PreparedStatement pstm1 = conn.prepareStatement(sql1);
		// pstm.setString(1, "tom");
		// pstm.setString(2, "tom001");
		rs = pstm1.executeQuery();
		// duyet ket qua
		while (rs.next()) {
			String ma = rs.getString(1);
			String ten = rs.getString(2);
			String diachi = rs.getString(3);
			String sdt = rs.getString(4);
			String ngaymua = rs.getString(5);
			System.out.println("-----------------------");
			System.out.println("MA: " + ma);
			System.out.println("TEN: " + ten);
			System.out.println("DIACHI: " + diachi);
			System.out.println("SDT: " + sdt);
			System.out.println("NGAYMUA: " + ngaymua);

		}
		
		//============================= NHANVIEN
		
		String sql2 = "select * from db_nhanvien";
		// thuc thi cau lenh sql
		// ResultSet rs=statement.executeQuery(sql1);
		PreparedStatement pstm2 = conn.prepareStatement(sql2);
		// pstm.setString(1, "tom");
		// pstm.setString(2, "tom001");
		rs = pstm2.executeQuery();
		// duyet ket qua
		while (rs.next()) {
			String ma = rs.getString(1);
			String ten = rs.getString(2);
			String diachi = rs.getString(3);
			String sdt = rs.getString(4);
			String ngaymua = rs.getString(5);
			System.out.println("-----------------------");
			System.out.println("MA: " + ma);
			System.out.println("TEN: " + ten);
			System.out.println("DIACHI: " + diachi);
			System.out.println("SDT: " + sdt);
			System.out.println("NGAY VAO LAM: " + ngaymua);

		}
		// Đóng kết nối
		conn.close();
	}

}