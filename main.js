var todobtn=document.getElementById("todobtn");
var todocontainer=document.getElementById("todocontainer");
var input=document.getElementById("input");

function addtolist(){
    var paragraph=document.createElement('p');
    paragraph.classList.add("para-styling");
    paragraph.innerHTML=input.value;
    todocontainer.appendChild(paragraph);
    input.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })
    
}