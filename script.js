const container = document.querySelector('#container');
// const grid = document.querySelector('#grid');
let size = 16;

const grid = document.createElement('div');
grid.id = 'grid';


createAGrid();

function createAGrid(){


    let totalNum = size*size; //let the power of math work!
    console.log(totalNum);


    for (let i = 0; i < size; i++) {  //repat the process

        
        let aRow = document.createElement('div'); //create arow
        aRow.id = i;
        aRow.classList.add('row');

        // console.log(i + 'row');

        for (let j = 0; j < size; j++) {

            let aCell = document.createElement('div'); //create a cell div
                 aCell.id = 'cell' + j; 
                    aCell.classList.add('cell');
    
                    // console.log(aCell.id);
                    
                    // aCell.setAttribute('style', 'width: 40px; height: 40px');
            
    
                    aRow.appendChild(aCell); //add a cell to a row
        }

        grid.appendChild(aRow);

    }

    container.appendChild(grid);
    }


        function whatSize() {

            size = prompt('enter the size of the grid', 'max 36');

            if (size === !NaN || size > 36 || size < 1){
                console.log('that is the wrong input!');
                whatSize();
            }
            else {
    
                resetGrid();
                console.log(size);
                createAGrid();
            }


        }

    function resetGrid() {
        
        
        container.removeChild(grid);

    }
    
       
    






