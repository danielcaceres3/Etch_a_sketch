function createBoard(size){
    //creating container to attach other divs to
    const container =  document.querySelector(".container"); 
    const boxes = container.querySelectorAll("div");
    boxes.forEach((div) =>  div.remove());
    //create the rows and columns for the element. Fr means it will take
    //max space equally
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // setting display for grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //setting display for grid

    //start a loop that creats each square
    let i = 0;
    while(i < size * size){
        const square = document.createElement("div"); //create square
        square.classList.add("square"); //making a class list for square
        square.style.backgroundColor = "white"; // bavground needs to be white
        square.style.border = ".5px solid black" // adding a .5 thickness as a border
        container.insertAdjacentElement('beforeend', square); //insert the square before ending the container div
        i++;
    };
};

function draw(){
    for(let square of squares){
        square.addEventListener('mouseenter', () => 
        square.style.backgroundColor = "black");  
    }
}

function resetFunction(){
    for(let square of squares){
    square.style.backgroundColor = "white";
    }
}

function getValue(){
    const size = document.getElementById("size").value;
    console.log(size);
    createBoard(0);
    createBoard(size);
    draw();
}


// have the user chose the desired size board
createBoard(16); //default size
const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener("click", () => getValue());


//creates a variable that stores all the div squares
const squares = document.getElementsByClassName("square");

//for loop to color squares black if hover
draw();

//resets the squares to white
const reset = document.querySelector("#reset");
reset.addEventListener('click', () =>
    resetFunction()
    ); 

