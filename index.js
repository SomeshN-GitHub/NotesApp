function showNotes(){
    console.log('wor');
    var notesJson= localStorage.getItem('notes');
    if(notesJson == null){
    var notesArray = [];
    document.querySelector('.notesContainer').innerText = 'No notes added yet';
    }
    else{
        notesArray = JSON.parse(notesJson);
        let noteContainer = document.querySelector('.notesContainer');
        noteContainer.innerHTML='';
        notesArray.forEach((element, index)=>{
            noteContainer.innerHTML+= `<div class="noteCard">
            <h3 class="title">${element.title}</h3>
            <p class="body">${element.body}</p>
            <button id=${index} onclick='deleteNote(this.id)' class='deleteNotebtn'><i class="fas fa-trash"></i></button>
        </div>`;
        })
    }
}
showNotes();

function addNote(){
    var notesJson= localStorage.getItem('notes');
    if(notesJson == null){
    notesArray = [];
    }
    else{
        notesArray = JSON.parse(notesJson);
        console.log(notesArray);
    }
        let noteTitle= document.getElementById('noteTitle');
        let noteBody = document.getElementById('noteBody');
        let noteObj ={
            title: noteTitle.value,
            body: noteBody.value
        };
        notesArray.push(noteObj);
        noteTitle.value='';
        noteBody.value='';
        localStorage.setItem('notes', JSON.stringify(notesArray));
    
    showNotes();
}

function deleteNote(i){
    var notesJson= localStorage.getItem('notes');
    
        notesArray = JSON.parse(notesJson);
        notesArray.splice(i,1);
        localStorage.setItem('notes', JSON.stringify(notesArray));
    showNotes();
    
}