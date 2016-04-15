var bio = {
	"name" : "Travis Gagnon",
	"role" : "Front End Web Developer",
	"contacts": {
		"email" : "traviswgagnon@gmail.com",
		"mobile" : "218-556-8313",
		"github" : "TravisWG"
	},
	"skills" : ["HTML", "CSS", "JavaScript", "Communication", "Work Ethic"],
	"pictureURL" : "images/me.jpg",
	"welcomeMessage" : "Hello!  My name is Travis and I am an aspiring Front End Web Developer."
}

var work = {
	"jobs" : [
		{	
		"title" : "CSPD Tech II",
		"employer" : "Sanford Health",
		"dates" : "July 2014 to Current",
		"city" : "Fargo",
		"description" : "Processing and assembly of sterile instrumentation for use during surgical procedures."
		},
		{	
		"title" : "Psychiatric Technician",
		"employer" : "Prairie St John's",
		"dates" : "February 2012 to May 2013",
		"city" : "Fargo",
		"description" : "Assisted nursing staff with patient care in an inpatient psychiatric facility"
		}
	]
}

var education = {
	"schools" : [
		{
		"name" : "Bemidji State University",
		"city" : "Bemidji, MN",
		"degree" : "B.S.",
		"major" : "Psychology",
		"minor" : "Philosophy"
		},
		{
		"name" : "North Dakota State University",
		"city" : "Fargo, MN",
		"degree" : "Non-degree",
		"major" : "Pre-Physical Therapy"		
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
		"city" : "February 2015 to Current",
		"title" : "Front End Web Development Nanodegree",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

var projects = {
	"projects" : [
		{
		"title" : "Intro to Programming Nanodegree Notes Webpage",
		"dates" : "May 2015 - October 2015",
		"description" : "Website built using skills learned during Intro to Programming Nanodegree. Content is primarily notes taken during the course. The site is hosted using Google App Engine and features use of HTML, CSS, (minor) JavaScript, and Python.",
		"location" : "Udacity",
		"image" : "images/IPND_Page.jpg"
		}
	]
}



var name = "Travis Gagnon";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var skills = 0;
	while(skills < bio.skills.length) { 
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skills]));
		skills = skills + 1;
	}
}

function displayWork(){
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
		
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		$(".work-entry:last").append(formattedCity);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}	
}

displayWork();

function inName(){
	var nameArray = name.split(" ");
	var upperLastName = nameArray[1];
	upperLastName = upperLastName.toUpperCase();
	name = nameArray[0] + " " + upperLastName;
	return name;
}

var inNameButtonHTML = "<button onclick='inName()'>Internationalize Name</button>";
$("#main").append(inNameButtonHTML);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		if(projects.projects[project].image.length > 0) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image));
		}
	}
}

projects.display();