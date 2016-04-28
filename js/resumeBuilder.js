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
	"biopic" : "images/bobby.jpg",
	"imageAlt": "Personal headshot"
};

bio.display =  function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	$("#header").append("<hr>");

	var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic).replace("%alt%", bio.imageAlt);
	$("#header").append(formattedbiopic);

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
};

bio.display();

var education = {
	"schools" : [{
		"name" : "Bemidji State University",
		"location" : "Bemidji, Minnesota",
		"degree" : "Bachelor of Science",
		"majors" : ["Psychology"],
		"dates" : "2004 - 2010",
		"url" : ""
		},
		{
		"name" : "North Dakota State University",
		"location" : "Fargo, North Dakota",
		"degree" : "Non-degree",
		"majors" : ["Pre-Physical Therapy"],
		"dates"	: "2013 - 2014",
		"url" : ""
		}
	],

	"onlineCourses" : [{
		"school" : "Udacity",
		"date" : "May 2015 - October 2015",
		"title" : "Intro to Programming Nanodegree",
		"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
		"school" : "Udacity",
		"date" : "February 2015 to Current",
		"title" : "Front End Web Development Nanodegree",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName.concat(formattedDegree));

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append("<br>" + HTMLonlineClasses);

	for(course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedTitle.concat(formattedOnlineSchool));

		var formattedCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedCourseDate);
	}
};

education.display();

var work = {
	"jobs" : [{
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
};

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
};

work.display();

var projects = {
	"projects" : [{
		"title" : "Responsive Web Design Project",
		"dates" : "March 2016",
		"description" : "Simple portfolio design that utilizes various responsive web design techniques such as CSS breakpoints (media queries), responsive patterns, CSS frameworks, and responsive images (srcset and sizes attributes).",
		"location" : "Udacity",
		"images" : ["images/responsive_page.jpg", "images/responsive_page_large.jpg"],
		"imageAlt": "Responsive Design Project Snapshot"
		},
		{
		"title" : "Intro to Programming Nanodegree Notes Webpage",
		"dates" : "May 2015 - October 2015",
		"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
		"location" : "Udacity",
		"images" : ["images/IPND_Page.jpg", "images/IPND_Page_Large.jpg"],
		"imageAlt": "Intro to Programming Note Webpage Snapshot"
		}
	]
};

projects.display = function() {
	$("#projects").append("<div class='project-container'></div>");
	for (project in projects.projects) {
		$(".project-container").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last > a").attr("href", project);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		if(projects.projects[project].images.length > 0) {
			var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]).replace("%alt%", projects.projects[project].imageAlt);
			$(".project-entry:last").append(projectImage);
		}
	}
};

projects.display();

$("#overlay").hide();

$(".project-entry > a[href!='#']").click(function(event){

	event.preventDefault();
	var href = $(this).attr("href");
	$("#overlay").append("<div class='popup-container'></div>");
	$(".popup-container").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[href].title);
	$(".project-entry:last").attr("class", "popup-entry");
	$(".popup-entry").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[href].dates);
	$(".popup-entry").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[href].description);
	$(".popup-entry").append(formattedDescription);

	if(projects.projects[project].images.length > 0) {
			var projectImage = HTMLprojectImage.replace("%data%", projects.projects[href].images[1]).replace("%alt%", projects.projects[project].imageAlt);
			$(".popup-entry").append(projectImage);

	$("#overlay").show(200);
	}
});

$(document).ready(function() {
	$("#overlay").on("click", function() {
		$("#overlay").hide(200);
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