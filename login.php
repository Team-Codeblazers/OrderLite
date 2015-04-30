<?php 

	if (!isset($_SESSION)) {
		session_start();
	}

	$error = '';
	if (isset($_POST['submit'])) {
		if (empty($_POST['username']) || empty($_POST['password'])) {
			$error = "Username or Password is invalid";
		}
		else {
			$username = $_POST['name'];
			$password = $_POST['pw'];
			$_SESSION["username"] = $username;
			$_SESSION["password"] = $password;
			


			//connect to sql database
			$conn = mysql_connect("localhost", "root", "toor");

			//to protect MySQL injection for Secutioty purpose
			$username = stripslashes($username);
			$password = stripslashes($password);
			$username = mysql_real_escape_string($username);
			$password = mysql_real_escape_string($password);

			//choose database
			$db = mysql_select_db("OrderLite", $conn);

			//Fetch info for users
			$query = mysql_query("SELECT * FROM Users WHERE password = '$password' AND username = '$username'", $conn);

			$rows = mysql_num_rows($query);

			if ($rows == 1) {
				$_SESSION['login_user'] = $username; // starting session
				header("Location: index.html");
			} else {
				$error = "Username of Passoword is Invalid, go fuck yourself";
			}
			mysql_close($conn);
		}
	}
?>