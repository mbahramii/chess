const board = document.getElementById("board")


// initial pieces arrangement as an 8*8 Array
const initialPieces = [
  [
    {type: "rook", color: "black"},
    {type: "knight", color: "black"},
    {type: "bishop", color: "black"},
    {type: "queen", color: "black"},
    {type: "king", color: "black"},
    {type: "bishop", color: "black"},
    {type: "knight", color: "black"},
    {type: "rook", color: "black"}
  ],
  [
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"},
    {type: "pawn", color: "black"}
  ],
  [{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""}],
  [{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""}],
  [{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""}],
  [{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""},{type: "", color: ""}],
  [
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"},
    {type: "pawn", color: "white"}
  ],
  [
    {type: "rook", color: "white"},
    {type: "knight", color: "white"},
    {type: "bishop", color: "white"},
    {type: "queen", color: "white"},
    {type: "king", color: "white"},
    {type: "bishop", color: "white"},
    {type: "knight", color: "white"},
    {type: "rook", color: "white"}
  ]
];



    for(let row =0 ; row < 8 ; row++ ){
        for(let col = 0 ; col < 8 ; col++ ){
            const square = document.createElement("div")
            square.className =  `square ${(row+col) % 2 === 0 ? "white" : "black"}`;


 // add pice icon 
const piece = initialPieces[row][col]   
    if(piece.type)
    {
    const icon = document.createElement("i")   
    icon.className = `fas fa-chess-${piece.type}`;
    if(piece.color === "white") {
    icon.classList.add("white-piece");
    } else {
    icon.classList.add("black-piece");
    }

    square.appendChild(icon)
    }


    board.appendChild(square)
    }}

