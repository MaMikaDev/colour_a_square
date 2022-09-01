const container = document.querySelector('#container');
let size = 16;
let j;

      
let grayscale = [ '#696969', '#707070', '#787878', '#808080', '	#888888', '#909090'];

createAGrid(); //call create a grid with default value of 16

function createAGrid(){

    const grid = document.createElement('div'); // grid being created a new every time the createAGrid is run
    grid.id = 'grid';

    let totalNum = size*size; //let the power of math work!
    console.log(totalNum);


    for (let i = 0; i < size; i++) {  //repat the process

        
        let aRow = document.createElement('div'); //create arow
        aRow.id = i;
        aRow.classList.add('row');

        for (j = 0; j < size; j++) {

            let aCell = document.createElement('div'); //create a cell div
                 aCell.id = 'cell' + j; 
                 aCell.addEventListener ('mouseover', () => {
                    aCell.style.backgroundColor = grayscale[Math.floor(Math.random() * grayscale.length)]
                 });

                 aCell.classList.add('cell');

            
                    aRow.appendChild(aCell); //add a cell to a row
        }

        grid.appendChild(aRow);

    }

    container.appendChild(grid);
    }


        function whatSize() { //asks for user's input 

            size = prompt('Choose the size of the grid between 1 and 36', 'max 36');

            if (size === !NaN || size > 36 || size < 1){
                console.log('that is the wrong input!');
                alert('That is the wrong input! Try again.')
                whatSize(); // calls the function again from within
            }
            else {
    
                console.log(size); // logs the entered value
                resetGrid();  //removes the grid element

                createAGrid();
            }


        }

    function resetGrid() {
        
        container.removeChild(grid);

    }
    
