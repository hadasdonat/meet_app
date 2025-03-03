document.addEventListener("DOMContentLoaded", function () {
    const meetingsList = document.querySelector("#meetings-list");
    const addMeetingBtn = document.querySelector(".btn-add");

    let meetings = JSON.parse(localStorage.getItem("meetings")) || [];

    function renderMeetings() {
        meetingsList.innerHTML = "";
        meetings.forEach((meeting, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${meeting.title}</td>
                <td>${meeting.date}</td>
                <td>${meeting.participants}</td>
                <td>
                    <button class="btn btn-edit" onclick="editMeeting(${index})">✏ ערוך</button>
                    <button class="btn btn-delete" onclick="deleteMeeting(${index})">🗑 מחק</button>
                </td>
            `;
            meetingsList.appendChild(row);
        });
    }

    function saveMeetings() {
        localStorage.setItem("meetings", JSON.stringify(meetings));
    }

    window.editMeeting = function (index) {
        let newTitle = prompt("עדכן כותרת:", meetings[index].title);
        if (newTitle) {
            meetings[index].title = newTitle;
            saveMeetings();
            renderMeetings();
        }
    };

    window.deleteMeeting = function (index) {
        if (confirm("האם אתה בטוח שברצונך למחוק את הפגישה?")) {
            meetings.splice(index, 1);
            saveMeetings();
            renderMeetings();
        }
    };

    if (addMeetingBtn) {
        addMeetingBtn.addEventListener("click", function () {
            window.location.href = "meeting_form.html";
        });
    }

    renderMeetings();
});
