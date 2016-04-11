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
		"position" : "CSPD Tech II",
		"employer" : "Sanford Health",
		"dates" : "July 2014 to Current",
		"city" : "Fargo"
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
		"image" : "imageNotHere.jpg"
		}
	]
}

var name = "Travis Gagnon";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

console.log(bio.skills.length);
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var skills = 0;
	while(skills < bio.skills.length) { 
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skills]));
		skills = skills + 1;
	}
}