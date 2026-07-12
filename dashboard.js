function openPage(id, page) {

    const element = document.getElementById(id);

    if (element) {

        element.addEventListener("click", function () {

            window.location.href = page;

        });

    }

}

openPage("dashboard-link", "dashboard.html");
openPage("bus-link", "bus-management.html");
openPage("drivers-link", "drivers.html");
openPage("routes-link", "routes.html");
openPage("trips-link", "trips.html");
openPage("analytics-link", "analytics.html");
openPage("settings-link", "settings.html");

openPage("new-trip", "trips.html");
openPage("view-all-trips", "trips.html");


const sidebarItems = document.querySelectorAll(".menu li");

sidebarItems.forEach(item => {

    item.addEventListener("click", function () {

        sidebarItems.forEach(i => {

            i.classList.remove("active");

        });

        this.classList.add("active");

    });

});

const greeting = document.getElementById("greeting");

if(greeting){

    const hour = new Date().getHours();

    if(hour < 12){

        greeting.innerHTML = "Good Morning, Admin ☀";

    }
    else if(hour < 17){

        greeting.innerHTML = "Good Afternoon, Admin 🌤";

    }
    else{

        greeting.innerHTML = "Good Evening, Admin 🌙";

    }

}

const currentDate = document.getElementById("current-date");

if(currentDate){

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    currentDate.innerHTML =
        new Date().toLocaleDateString("en-IN", options);

}

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",function(){

        this.style.transform="translateY(-6px)";
        this.style.transition="0.3s";

    });

    card.addEventListener("mouseleave",function(){

        this.style.transform="translateY(0px)";

    });

});

const notification = document.querySelector(".notification");

if(notification){

    notification.addEventListener("click",function(){

        alert(
            "Notifications\\n\\n" +
            "• Route 12 Delayed\\n" +
            "• Bus 305 Under Maintenance\\n" +
            "• Road Closed near City Center"
        );

    });

}

const search = document.querySelector(".search-box input");

if(search){

    search.addEventListener("keypress",function(e){

        if(e.key==="Enter"){

            alert("Searching for: " + this.value);

        }

    });

}

const profile = document.querySelector(".profile");

if(profile){

    profile.addEventListener("click",function(){

        window.location.href="profile.html";

    });

}

const logout = document.getElementById("logout");

if(logout){

    logout.addEventListener("click",function(){

        let confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if(confirmLogout){

            window.location.href="login.html";

        }

    });

}