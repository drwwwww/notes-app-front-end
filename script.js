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

function viewNotes(){
    fetch("https://notes-app-back-end-ly70.onrender.com/allNotes")
    .then(response => response.json())
    .then(data => {
        const viewList = document.getElementById("view")

        viewList.innerHTML = ""

        data.forEach(note => {
            const li = document.createElement("li");
            li.classList.add("view");
            li.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
            viewList.appendChild(li);
            });

    })
}