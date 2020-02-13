const notes_view = ((data) => {
    let html = `
    <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/css/style.css"></head>
    <body>
        <div>
        Olet kirjautunut käyttäjänimellä: ${data.user_name} 
        <form action="/logout" method="POST">
            <button type="submit" class="add_button">Log out</button>
        </form></div>`;


    data.notes.forEach((note) => {
        html += note.text;
        html += `
            <form action="delete-note" method="POST">
                <input type="hidden" name="note_id" value="${note._id}"><br>
                <button type="submit" class="delete_button">Delete note</button>
            </form><br>
            `;
    });

    html += `
        <form action="/add-note" method="POST">
            <input type="text" name="note">
            <button type="submit" class="reg_button">Add note</button>
        </form>
        </body>
    </html>
    `;
    return html;
});


const note_view = (data) => {
    let html = `
    <html>
    <body>
       <br>
        Note text: ${data.text}
    </body>
    </html>
    `;
    return html;
};

module.exports.notes_view = notes_view;
module.exports.note_view = note_view;