<?php
    include('login.php');
    if (isset($_SESSION['login_user'])) {
        header("location: index.html");
    }
?>

<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spots Sign In</title>

    <!-- Bootstrap CSS -->
    <link href="/SPOTS/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="/SPOTS/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,300,100' rel='stylesheet' type='text/css'>
    <!-- TipueDrop CSS -->
    <link href="/SPOTS/css/tipuedrop.css" rel="stylesheet">
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="/SPOTS/css/leaflet.css"
    <!-- Custom CSS -->
    <link href="/SPOTS/css/styles.css" rel="stylesheet">

</head>
<body>
        <!-- Fixed Top Navbar -->
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header page-scroll">
                
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div class="navbar-left">
                
                </div>
                
            </div>
        </div>
    </div>
    
    	<div style="margin-top:80px" class="centered">
                <h2>Sign in </h2></br></br>
        
        
        <form method = "post" action="">
        	<span style="padding: 0 20px">&nbsp;</span>

                </select> 
            <label>Username: </label><input type="text" name="username"/><br/><br/>
            <label>Password: </label><input type="password" name="password" /><br/><br/><br/>
         	<input name="submit" type="submit" value=" Login " class="centered" >
            <span><br/><br/><br/><?php echo $error; ?></span></div>
        </form>
            
        </div>

        <!-- <div style="margin-top:80px" class="centered">
        <h2> Sign in as Homeowner</h2> 
            <form method = "post" action="signInAsHomeowner.php">
                <label>Username: </label><input type="text" name="username"/><br/><br/>
                <label>Password: </label><input type="password" name="password" /><br/><br/>
	            <input name="submit" type="submit" value=" Login ">
	            <span><?php echo $error; ?></span>  
            </form>  
        </div> -->

        <div style="margin-top:80px" class="centered">
            <form action="forgotUserPass.html"><button type="submit">Forgot Username or Password? 
            </button>
            </form>
        </div>



        
</body>    
            
		

</html>