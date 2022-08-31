const grid = document.querySelector('#grid');

let size;


function createAGrid(){

    for (let i = 1; i < 17; i++) {  //repat the process exactly 16 times

        let aRow = document.createElement('div'); //create a row

        // aRow.classList.add('row');
        // aRow.id = 'row' + i; //each row gets a consequtive number
        // console.log(aRow.id)  // checking if the row are being intiated correctly
        // // aRow.setAttribute('style', 'border: solid black; background: white;');  


        //     for(let j = 1; j < 17; j++){
        //         let aCell = document.createElement('div'); //create a cell div
        //         aCell.id = i + 'cell' + j; //naming each cell for checking purposes really
        //         aCell.classList.add('cell');

        //         console.log(aCell.id);
                
        //         // aCell.setAttribute('style', 'width: 40px; height: 40px');
        

        //         aRow.appendChild(aCell); //add a cell to a row
        //     }

        //     grid.appendChild(aRow);  //attach the row to the grid
        //commented out for the sake of a different approach

        // }
    }


        function whatSize() {

            size = prompt('enter the size of the grid', 'max 100');

            if (size === !NaN || size > 100 || size < 1){
                console.log('that is the wrong input!');
            }
            // else {
            //     console.log(size);

            // }


        }
