
		var backgroundColorDeger = 0;

		var home = document.getElementById('home');
		var about = document.getElementById('about');
		var skills = document.getElementById('skills');
		var contact = document.getElementById('contact');
		var globeIcon = document.getElementById('glob-icon');
		var IconImgAcc = document.getElementById('icon-img-account');
		var mainBodyText = document.getElementById('main-body-text');
		var boshHeader = document.getElementById("boshHeader");

	
		function rangAlmashtirFonk1(x) {
			x.classList.add("yazi-color");

		}
		function rangAlmashtirFonk0(x) {
			x.classList.remove("yazi-color");
		}


		//bu metodimiz divlerimizning boyunu browserimiz boyiga ko'ra to'g'irlaydi
		let myVar = setInterval(myTimer, 100);
		function myTimer() {
		  	var h = window.innerHeight;
		  	document.getElementsByClassName("main-div")[0].style.height = h+"px" ;
		  	document.getElementsByClassName("main-div")[1].style.height = h+"px" ;
			document.getElementById("contactMe").style.height = h+"px" ;
			
			document.getElementById("contactMeFormLeftDiv").style.height = (h/100)*60 - 60 +"px"; 
			document.getElementById("hrContact").style.height = (h/100)*60 - 60 +"px";
			document.getElementById("contactMeFormRightDiv").style.height = (h/100)*60 - 60 +"px";
		}

		

		//bacground Almastirish amallari
		function backgrounAlmashtir() {
			if (backgroundColorDeger == 0){
			 	
			 	
			 //	IconImgAcc.style.boxShadow = "3px 3px 15px #020202";
			 	IconImgAcc.style.backgroundColor = "#949494";
			 	boshHeader.style.backgroundColor = "#f6f4f4e3";

			 	home.classList.add("background-color-black");
				about.classList.add("background-color-black");
				skills.classList.add("background-color-black");
				contact.classList.add("background-color-black");

				globeIcon.style.color = 'black';

				//mainBodyText.style.color = 'black';

			 	backgroundColorDeger++;
			}else{
				document.body.style.backgroundColor = "#0a0a0aed";

				
			 	IconImgAcc.style.boxShadow = "3px 3px 15px grey";
			 	IconImgAcc.style.backgroundColor = "#202020";
			 	boshHeader.style.backgroundColor = "#0a0a0ae3"

			 	home.classList.remove("background-color-black");
				about.classList.remove("background-color-black");
				skills.classList.remove("background-color-black");
				contact.classList.remove("background-color-black");

				globeIcon.style.color = 'white';

				mainBodyText.style.color = 'white';

				backgroundColorDeger--;
			}
		}

		//dil tanlovi slector va Glob icon tugma birlashtirilishi
		function dilSelector() {
			document.getElementById("dilList").style.display = "";
		}

		
		function fonIshla(x) {
			x.classList.add("icon-img-account-2");
		}
		function fonAsl(x) {
			x.classList.remove("icon-img-account-2");
		}


// Ekran eni 1028pxdan kichik bo'lganda ekrandaki elementlarning joylashishi va o'zgarishi


	let myVar1028 = setInterval(myTimer1028, 100);
	function myTimer1028() {
    	var w= window.innerWidth;
    	var h = window.innerHeight;
	    if(w < 1028){
	    	//skils div
		  	document.getElementById("my-skills-h1").style.paddingTop = "0px";
		  	document.getElementById("portfolioImg").style.paddingLeft = "110px";
		  	

		  	//contact Me div
		  	document.getElementById("contactMeFormLeftDiv").style.float = "none";
		  	document.getElementById("contactMeFormLeftDiv").style.width = "85%"
		  	document.getElementById("contactMeFormRightDiv").style.width = "85%"
		  	document.getElementById("contactMeFormRightDiv").style.paddingTop = "0px"
		  	document.getElementById("contactMeFormLeftDiv").style.paddingTop = "50px";
		  	document.getElementById("hrContact").style.display = "none";
		  	document.getElementById("contactMeFormDiv").style.height = "800px";
	 	}else{
	 		document.getElementById("portfolioImg").style.paddingLeft = "";


	 		//contact Me div
	 		document.getElementById("contactMeFormLeftDiv").style.width = "40%"
	 		document.getElementById("contactMeFormRightDiv").style.width = "40%"
	 		document.getElementById("contactMeFormDiv").style.height = (h/100)*60 +"px";
		  	document.getElementById("contactMeFormLeftDiv").style.float = "left";
		  	document.getElementById("contactMeFormRightDiv").style.paddingTop = "50px"
		  	document.getElementById("hrContact").style.display = "";
		  	}
		}