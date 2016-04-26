var bio = {
	"name" : "Travis Gagnon",
	"role" : "Front End Web Developer",
	"contacts": {
		"mobile" : "701-555-8313",
		"email" : "traviswgagnon@gmail.com",
		"github" : "TravisWG",
		"location" : "Fargo, North Dakota"
	},
	"welcomeMessage" : "Hello!  My name is Travis and I am an aspiring Front End Web Developer.",
	"skills" : ["HTML", "CSS", "JavaScript", "Communication", "Work Ethic"],
	"bioPic" : "images/bobby.jpg"
}	

bio.display =  function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	$("#header").append("<hr>");

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var skills = 0;
		while(skills < bio.skills.length) { 
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skills]));
			skills = skills + 1;
		}
	}	
}

bio.display()

var education = {
	"schools" : [
		{
		"name" : "Bemidji State University",
		"location" : "Bemidji, Minnesota",
		"degree" : "Bachelor of Science",
		"major" : "Psychology",
		"dates" : "2004 - 2010"
		},
		{
		"name" : "North Dakota State University",
		"location" : "Fargo, North Dakota",
		"degree" : "Non-degree",
		"major" : "Pre-Physical Therapy",
		"dates"	: "2013 - 2014"	
		}
	],	
	
	"onlineCourses" : [
		{
		"school" : "Udacity",
		"dates" : "May 2015 - October 2015",
		"title" : "Intro to Programming Nanodegree",
		"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
		"school" : "Udacity",
		"dates" : "February 2015 to Current",
		"title" : "Front End Web Development Nanodegree",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
		$(".education-entry:last").append(formattedName.concat(formattedDegree));

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}


	$("#education").append("<br>" + HTMLonlineClasses);
	
	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedTitle.concat(formattedOnlineSchool));

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
	}
}

education.display();

var work = {
	"jobs" : [
		{	
		"employer" : "Good Health Hospital",
		"title" : "CSPD Tech II",
		"location" : "Fargo, North Dakota",
		"dates" : "July 2014 to Current",
		"description" : "Processing and assembly of sterile instrumentation for use during surgical procedures."
		},
		{	
		"employer" : "St John's Hospital",
		"title" : "Psychiatric Technician",
		"location" : "Fargo, North Dakota",
		"dates" : "February 2012 to May 2013",
		"description" : "Assisted nursing staff with patient care in an inpatient psychiatric facility"
		}
	]
}

work.display = function(){
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedCity);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

work.display();

var projects = {
	"projects" : [
		{
		"title" : "Intro to Programming Nanodegree Notes Webpage",
		"dates" : "May 2015 - October 2015",
		"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
		"location" : "Udacity",
		"image" : "images/IPND_Page.jpg"
		},
		{
		"title" : "Bascondfsdf",
		"dates" : "May 2015 - October 2015",
		"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
		"location" : "Udacity",
		"image" : "images/IPND_Page.jpg"
		},
		{
		"title" : "Intro to Programming Nanodegree Notes Webpage",
		"dates" : "May 2015 - October 2015",
		"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
		"location" : "Udacity",
		"image" : "images/IPND_Page.jpg"
		}
	]
}



projects.display = function() {
	$("#projects").append("<div class='project-container'></div>")
	for (project in projects.projects) {
		$(".project-container").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last > a").attr("href", project);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		if(projects.projects[project].image.length > 0) {
			var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
			$(".project-entry:last").append(projectImage);
		}
	}
}

projects.display();

$("#overlay").hide();

$("a[href!='#']").click(function(event){
	
	event.preventDefault();
	var href = $(this).attr("href");
	$("#overlay").append("<div class='popup-container'></div>");
	$(".popup-container").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[href].title);
	$(".project-entry:last").attr("class", "popup-entry");
	$(".popup-entry").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[href].dates);
	$(".popup-entry").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[href].description)
	$(".popup-entry").append(formattedDescription);

	if(projects.projects[project].image.length > 0) {
			var projectImage = HTMLprojectImage.replace("%data%", projects.projects[href].image);
			$(".popup-entry").append(projectImage);

	$("#overlay").show(200);
	}
});


$(document).ready(function() {
	$("#overlay").on("click", function() {
		$("#overlay").hide();
		$("#overlay").empty();
	});
});



function inName(){
	var nameArray = bio.name.split(" ");
	var upperLastName = nameArray[1];
	upperLastName = upperLastName.toUpperCase();
	name = nameArray[0] + " " + upperLastName;
	return name;
}

var inNameButtonHTML = "<button onclick='inName()'>Internationalize Name</button>";
$("#main").append(inNameButtonHTML);

$("#mapDiv").append(googleMap);
