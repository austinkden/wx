const eventIcons = {
    "Special Weather Statement": `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-alert-icon lucide-cloud-alert"><path d="M12 12v4"/><path d="M12 20h.01"/><path d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"/></svg>`,
    "Severe Thunderstorm Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-lightning-icon lucide-cloud-lightning"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>`,
    "Flash Flood Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Red Flag Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    "Heat Advisory" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M4 13H2"/><path d="M6.34 7.34 4.93 5.93"/></svg>`,
    "Flood Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Marine Weather Statement" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship-icon lucide-ship"><path d="M12 10.189V14"/><path d="M12 2v3"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Extreme Heat Watch" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M4 13H2"/><path d="M6.34 7.34 4.93 5.93"/></svg>`,
    "Flood Advisory" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Flood Watch" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Small Craft Advisory" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sailboat-icon lucide-sailboat"><path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"/><path d="M21 14 10 2 3 14h18Z"/><path d="M10 2v16"/></svg>`,
    "Severe Thunderstorm Watch" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-lightning-icon lucide-cloud-lightning"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>`,
    "Gale Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>`,
    "Gale Watch" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>`,
    "High Surf Advisory" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Air Quality Alert" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory-icon lucide-factory"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>`,
    "Extreme Heat Warning" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"><path d="M12 9a4 4 0 0 0-2 7.5"/><path d="M12 3v2"/><path d="m6.6 18.4-1.4 1.4"/><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M4 13H2"/><path d="M6.34 7.34 4.93 5.93"/></svg>`,
    "Beach Hazards Statement" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-icon lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
    "Fire Weather Watch" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    "Wind Advisory" : `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>`
}

const eventWhitelist = [
    "Special Weather Statement",
    "Severe Thunderstorm Warning",
    "Flash Flood Warning",
    "Red Flag Warning",
    "Heat Advisory",
    "Flood Warning",
    "Marine Weather Statement",
    "Extreme Heat Watch",
    "Flood Advisory",
    "Flood Watch",
    "Small Craft Advisory",
    "Severe Thunderstorm Watch",
    "Gale Warning",
    "Gale Watch",
    "High Surf Advisory",
    "Air Quality Alert",
    "Extreme Heat Warning",
    "Beach Hazards Statement",
    "Fire Weather Watch",
    "Wind Advisory"
]

const eventBlacklist = [
    "Test Message"
]

const urgencyWhitelist = [
    "Immediate",
    "Expected",
    "Future",
    "Unknown"
]

const urgencyBlacklist = [
    "Past",
]

const responseWhitelist = [
    "Execute",
    "Shelter",
    "Avoid",
    "Monitor",
    "Prepare"
]

const severityWhitelist = [
    "Severe",
    "Moderate",
    "Minor",
    "Unknown"
]

const certaintyWhitelist = [
    "Observed",
    "Likely",
    "Possible",
    "Unknown"
]

async function getAlerts() {
    fetch("https://api.weather.gov/alerts/active", {
        headers: {
            "User-Agent": "WeatherKDEN (austinkden@gmail.com)",
            "Accept": "application/ld+json"
        }
    })
    .then(res => res.json())
    .then(data => {
        const alerts = data["@graph"];
        console.log(alerts);
        alerts.forEach(warning => {

            const event = warning.event;
            // Example: Severe Thunderstorm Warning

            const urgency = warning.urgency;
            // Immediate, Expected, Future, Past, Unknown

            const response = warning.response;
            // Execute, Shelter, Avoid, Monitor, Prepare

            const severity = warning.severity;
            // Severe, Moderate, Minor, Unknown

            const certainty = warning.certainty;
            // Observed, Likely, Possible, Unknown

            const area = warning.areaDesc;
            const description = warning.description;
            let effective = warning.effective;
            let ends = warning.ends;
            let expires = warning.expires;
            const sender = warning.senderName;
            const messageType = warning.messageType;
            const instruction = warning.instruction;

            if (eventBlacklist.includes(event)) return;
            if (!eventWhitelist.includes(event)) return;
            if (!eventBlacklist.includes(event) && !eventWhitelist.includes(event)) {
                alert("Unknown event: " + event);
                console.error("Unknown event: " + event);
            }

            if (urgencyBlacklist.includes(urgency)) return;
            if (!urgencyWhitelist.includes(urgency)) return;
            if (!urgencyBlacklist.includes(urgency) && !urgencyWhitelist.includes(urgency)) {
                alert("Unknown urgency: " + urgency);
                console.error("Unknown urgency: " + urgency);
            }

            if (!severityWhitelist.includes(severity)) {
                alert("Unknown severity: " + severity);
                console.error("Unknown severity: " + severity);
                return;
            }


            if (!certaintyWhitelist.includes(certainty)) {
                alert("Unknown certainty: " + certainty);
                console.error("Unknown certainty: " + certainty);
                return;
            }

            if (!responseWhitelist.includes(response)) {
                alert("Unknown response: " + response);
                console.error("Unknown response: " + response);   
                return;
            }

            const alertDiv = document.createElement("div");
            alertDiv.classList.add("alert");

            let urgencyExtra;

            if (urgency) {
                urgencyExtra = " (" + urgency + ")";
            } else {
                urgencyExtra = "";
            }

            if (event) {
                const eventDiv = document.createElement("div");
                eventDiv.classList.add("event");
                eventDiv.innerHTML = `
                    ${eventIcons[event]}
                    <h1>${event}${urgencyExtra}</h1>
                `;
                alertDiv.appendChild(eventDiv);
            } else {
                alert("No event");
                console.error("No event");
            }

            let subString = "";
            if (certainty) subString = `${certainty}`;
            if (severity) subString += ` • ${severity}`;
            if (messageType) subString += ` • ${messageType}`;
            if (response) subString += ` • ${response}`;

            if (subString.split(" • ").length === 4) {
                if (subString) alertDiv.innerHTML += `<h2 class>${subString}</h2>`;
            } else {
                alert("Invalid subString");
                console.error("Invalid subString");
            }

            const timeOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
            }

            effective = new Date(effective).toLocaleString('en-US', timeOptions);
            expires = new Date(expires).toLocaleString('en-US', timeOptions);

            if (effective) alertDiv.innerHTML += `<p class="effective"><b>Effective:</b> ${effective}</p>`;
        
            if (ends) {
                ends = new Date(ends).toLocaleString('en-US', timeOptions);
                alertDiv.innerHTML += `<p class="ends"><b>Ends:</b> ${ends}</p>`;
            }

            if (expires) alertDiv.innerHTML += `<p class="expires"><b>Expires:</b> ${expires}</p>`;

            if (sender) alertDiv.innerHTML += `<p class="sender"><b>From:</b> ${sender}</p>`;

            if (area) alertDiv.innerHTML += `<p class="area"><b>Area:</b> ${area}</p>`;

            alertDiv.innerHTML += `<div class="buttons">
                <button class="more">View More</button>
            </div>`;

            document.body.appendChild(alertDiv);

            const eventEl = alertDiv.querySelector("div.event");
            eventEl.addEventListener("click", () => {

            })
        });
    });
}

getAlerts();


document.getElementById("to-top").addEventListener("click", () => {
    const blur = document.querySelector("div.scroll-blur");
    blur.classList.add("on");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const checkScroll = setInterval(() => {
        if (window.scrollY <= 500) {
            clearInterval(checkScroll);
            blur.classList.remove("on");
        }
    }, 75);
});

document.getElementById("to-bottom").addEventListener("click", () => {
    const blur = document.querySelector("div.scroll-blur");
    blur.classList.add("on");

    const targetScroll = document.body.scrollHeight - window.innerHeight;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    const checkScroll = setInterval(() => {
        if (Math.abs(window.scrollY - targetScroll) < 500) {
            clearInterval(checkScroll);
            blur.classList.remove("on");
        }
    }, 75);
});

document.addEventListener("mousemove", (e) => {
    if (e.clientX > window.innerWidth - 10) {
        document.getElementById("to-top").style.opacity = 1;
        document.getElementById("to-bottom").style.opacity = 1;
    } else if (document.getElementById("to-top").hover) {
        document.getElementById("to-top").style.opacity = 1;
    } else if (document.getElementById("to-bottom").hover) {
        document.getElementById("to-bottom").style.opacity = 1;
    } else {
        document.getElementById("to-top").style.opacity = 0;
        document.getElementById("to-bottom").style.opacity = 0;
    }
});

document.getElementById("to-top").addEventListener("mouseover", () => {
    document.getElementById("to-top").hover = true;
});

document.getElementById("to-top").addEventListener("mouseout", () => {
    document.getElementById("to-top").hover = false;
});

document.getElementById("to-bottom").addEventListener("mouseover", () => {
    document.getElementById("to-bottom").hover = true;
});

document.getElementById("to-bottom").addEventListener("mouseout", () => {
    document.getElementById("to-bottom").hover = false;
});
