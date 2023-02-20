const taskContainer = document.getElementById("taskContainer");
const button = document.getElementById("addButton") as HTMLButtonElement;
const input = (document.getElementById("addInput") as HTMLInputElement);

let checkBox = document.createElement("button");
checkBox.setAttribute("type", "checkbox");

let delButton = document.createElement("button");
delButton.classList.add("delButton");
delButton.innerText = "X";

//input.focus(); wtf does this do at this breaks it all

const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let inputVal = (document.getElementById("addInput") as HTMLInputElement).value;
    if(inputVal == "" || inputVal == " ") {
        alert("Please add an input");
    } else {
        addInput();
        alert(inputVal);
    }
}

function addInput() {
    let span = document.createElement("SPAN");
    let listEl = document.createElement("li");
    let userInput = (document.getElementById("addInput") as HTMLInputElement).value;

    let checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.classList.add("checkBox");

    let delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.innerText = "X";
    
    let text = document.createTextNode(userInput);
    span.appendChild(text);
    taskContainer.appendChild(listEl);

    taskContainer.style.padding = "5px";

    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        taskContainer.removeChild(listEl);
        if(taskContainer.children.length <= 0) {
        taskContainer.style.padding = "0px"; 
        }
    });

    checkBox.addEventListener("change", function() {  
        if(checkBox.checked == true) {
        span.style.textDecoration = "line-through"
        } else {
        span.style.textDecoration = "none";
        }
    });

    listEl.appendChild(delButton);
    listEl.appendChild(span);
    listEl.appendChild(checkBox);
    input.value = "";
    
}

function todoInput() {
    return (
        <div>
            <form id="inputContainer">
                <input id="addInput" type="text" placeholder="Please Input a Task" />
            <button id="addButton" onClick={handleClick}>add</button>
            </form>
                <ul id="taskContainer">
            </ul>
        </div>
    );   
}


export default todoInput;