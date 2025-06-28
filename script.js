function submitNote() {
    const note = {
        title: document.getElementById("newNote").value,
        content : document.getElementById("newContent").value,
    }

    fetch("https://notes-app-back-end-ly70.onrender.com/addNote", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(data => {
        const alert = document.getElementById("alert")
        alert.classList.add("active");

        setTimeout(() => {
        alert.classList.remove("active");
        }, 3000); // disappears after 3 seconds
    })
    .catch(err => {
        console.error("Something went wrong:", err);
    })

}