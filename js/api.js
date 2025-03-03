const API_URL = "https://your-api.com"; // כתובת ה-API שלך

async function getMeetings() {
    const response = await fetch(`${API_URL}/meetings`);
    return response.json();
}

async function getMeeting(id) {
    const response = await fetch(`${API_URL}/meetings/${id}`);
    return response.json();
}

async function createMeeting(meeting) {
    const response = await fetch(`${API_URL}/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meeting)
    });
    return response.json();
}

async function updateMeeting(id, meeting) {
    const response = await fetch(`${API_URL}/meetings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meeting)
    });
    return response.json();
}

async function deleteMeeting(id) {
    const response = await fetch(`${API_URL}/meetings/${id}`, {
        method: "DELETE"
    });
    return response.json();
}
