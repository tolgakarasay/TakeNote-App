const addBtn = document.getElementById("add");
let counter=0;

addBtn.addEventListener("click", function(){
    createNewNote();
}
);

function createNewNote(){
    const newNote = document.createElement("div");
    newNote.innerHTML=`
    <div class="notes"  id="notes">
    <div class="tools">
        <button class="smallBtn edit">
            <i class="editIcon far fa-save"></i>
        </button>
        <button class="smallBtn delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    <div class="main hidden"></div>
    <textarea class="textarea"></textarea>
    </div>`
 
    //document.querySelector(".newNotes").appendChild(newNote);
    
    const list = document.querySelector(".newNotes");
    list.insertBefore(newNote, list.childNodes[counter]);
    counter++;

    const delBtn = newNote.querySelector(".delete");
    delBtn.addEventListener("click", function(){
    newNote.remove();
    counter--;
    })


    const editBtn = newNote.querySelector(".edit");
    const editIcon = newNote.querySelector(".editIcon")
    const main = newNote.querySelector(".main");
    const textarea = newNote.querySelector(".textarea");
    editBtn.addEventListener("click", function(){
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
        textarea.select();
        editIcon.classList.toggle("fa-edit");
        editIcon.classList.toggle("fa-save");
    })
    textarea.addEventListener("input", function(input){
        const {value} = input.target;
        main.innerHTML=marked(value);
    })
    
}

