console.log('Hey vaibahv');
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = []; 
    } 
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value = "";
    showNotes();
} )
function showNotes(){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = []; 
    } 
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element,index) {
        html +=`
              <div class="noteCard my-3 mx-2" style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id=${index} onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</Button>
                  <button class="badge rounded-pill bg-success" id=${index} onclick="clr(this.id)" >Important</button>
                  </div>
              </div>
        
        `;
    });

    let notesElm = document.getElementById('notes');
    if(notesobj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Add Above "<b><i>Add Note</b></i>" Section to add Notes with iNotes`;
    }
    
}

function deleteNode(index){
    console.log("deleting",index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = []; 
    } 
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();

}
