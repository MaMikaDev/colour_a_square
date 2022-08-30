const grid = document.querySelector('#grid');



    for (let i = 1; i < 17; i++) {  //repat the process exactly 16 times

        let aColumn = document.createElement('div'); //create a column

        aColumn.classList.add('column');
        aColumn.id = 'column' + i; //each column gets a consequtive number
        console.log(aColumn.id)  // checking if the column are being intiated correctly
        // aColumn.setAttribute('style', 'border: solid black; background: white;');  


            for(let j = 1; j < 17; j++){
                let aCell = document.createElement('div'); //create a cell div
                aCell.id = i + 'cell' + j; //naming each cell for checking purposes really
                aCell.classList.add('cell');

                console.log(aCell.id);

                aCell.setAttribute('style', 'width: 20px; height: 20px');
                // aCell.textContent = '222';

                aColumn.appendChild(aCell); //add a cell to a row
            }

            grid.appendChild(aColumn);  //attach the row to the grid

        }
