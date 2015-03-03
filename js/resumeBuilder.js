
//objects declaration

var bio = {
    "name": "Raul Salazar",
    "age": 41,
    "role": "Web Developer",
    "skills":  ["MVC 4","ASP.Net","Web API", "SQLServer 2012", "JQuery"],
    "contacts": {
        "mobile":"519 573 7331",
        "email":"raul.salazar2008@gmail.com",
        "location": "Kitchener, Ontario, Canada",
        "github": "https://github.com/craraulsalazar",
        "generic": "519 888 555",
        "tweeter":"https://tweeter.com/rcsalazar"
    },
    "biopic": "https://lh5.googleusercontent.com/-GggyQGRwcfs/U9cIHN-ZQ2I/AAAAAAAAAJo/YrZCvg3Lk0Y/w126-h126-p/Bart.png",
    "welcomeMsg":"hi there, welcome message",
    display: function () {
    }


};


var work = {
    jobs: [
        {
            title: "UI Software Developer",
            employer: "Latem Industries Ltd",
            url:"http://www.latem.com",
            dates: "10/2002 - 12/2008",
            location:"Cambridge, Ontario",
            description:"Manufacturing custom development"
        },
        {
            title: "Web Developer",
            employer: "eSolutions Group",
            url:"http://www.esolutionsgroup.ca",
            dates: "06/2011 - Today",
            location:"Waterloo, Ontario",
            description:"Local Goverment and Municipalities custom development"
        },
        {
            title: "Windows Application Developer",
            employer: "Trux Route Management Systems Inc",
            url:"http://trux.com",
            dates: "12/2008 - 06/2011",
            location:"Cambridge, Ontario",
            description:"Waste Management custom development"
        }

    ],
    display: function () {
    }
}


//display education

var education = {
    schools: [
        {
            name: "Conestoga College",
            degree: "Computer Programmer Analyst",
            dates: "1993-1996",
            location:"Kitchener, Ontario",
            url:"http://www.conestogac.on.ca/",
            majors: ["Algorithms","Data Management"]
        },
        {
            name: "University of Waterloo",
            degree: "Computer Science BA",
            dates: "1997-2001",
            location: "Waterloo, Ontario",
            url:"https://uwaterloo.ca/",
            majors: ["Calculus","Statistic"]
        }

    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates:"Jan 2015",
            url:"https://www.udacity.com"
        }
    ]
    ,
    display: function () {
    }
}


//projects

var project = {
    projects: [
        {
            title: "Waste Management paper",
            dates: "2003-2004",
            description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9IICPihN9FJ47lbuO-MmmqIXmHW6cLB2grttO574t1JthDhJ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlI8JH_oo6dRf8L9ExfvHxU1ncBYs-feObbwmr-jX7_38V4UMVgg"]
        },
        {
            title: "Better local governance",
            dates: "1996-1997",
            description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            images: ["https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlI8JH_oo6dRf8L9ExfvHxU1ncBYs-feObbwmr-jX7_38V4UMVgg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9IICPihN9FJ47lbuO-MmmqIXmHW6cLB2grttO574t1JthDhJ"]
        }
    ]
    ,
    display: function () {
    }

}


bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);


    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedbioPic);

//top header contacts
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);

    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedemail);

    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedgithub);

    var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.tweeter);
    $("#topContacts").append(formattedtwitter);

    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedlocation);

    //footer contacts
    formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#footerContacts").append(formattedmobile);

    formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#footerContacts").append(formattedemail);

    formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#footerContacts").append(formattedgithub);

    formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.tweeter);
    $("#footerContacts").append(formattedtwitter);

    formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#footerContacts").append(formattedlocation);


    //skills

    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {

        var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#skills").append(formattedskills);

    }

    //adding button produces an error
    //$("#header").append(internationalizeButton);
};





work.display = function() {

    //display work experience

    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(
        function (job){

            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", job.url);

            var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);

            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);

            var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);

            var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry").append(formattedworkEmployer+formattedworkTitle);
            $(".work-entry").append(formattedworkDates);
            $(".work-entry").append(formattedworkLocation);
            $(".work-entry").append(formattedworkDescription);
        }

    )


};





education.display = function() {


    $("#education").append(HTMLschoolStart);

    for (var school = 0; school < education.schools.length; school++) {

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

        $(".education-entry").append(formattedschoolName + formattedschoolDegree);
        $(".education-entry").append(formattedschoolDates);
        $(".education-entry").append(formattedschoolLocation);

        for (var major in education.schools[school].majors) {

            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);

            $(".education-entry").append(formattedschoolMajor);
        }

    }


    $(".education-entry").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

        var formattedonlineUR = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);


        $(".education-entry").append(formattedonlineTitle+formattedonlineSchool);
        $(".education-entry").append(formattedonlineDates);
        $(".education-entry").append(formattedonlineUR);


    }




}



project.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (var prj in project.projects) {

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[prj].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[prj].dates);

        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[prj].description);

        $(".project-entry").append(formattedprojectTitle);
        $(".project-entry").append(formattedprojectDates);
        $(".project-entry").append(formattedprojectDescription);


        for (var image in project.projects[prj].images) {

            var formattedprojPic = HTMLprojectImage.replace("%data%", project.projects[prj].images[image]);

            $(".project-entry").append(formattedprojPic);

        }


    }

}


function ResumeDisplay(){

    bio.display();
    work.display();
    education.display();
    project.display();

    //add google map
    $("#mapDiv").append(googleMap);

}

ResumeDisplay();