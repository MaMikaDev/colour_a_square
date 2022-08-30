const grid = document.querySelector('#grid');


grid.setAttribute('style', 'display: flex; flex-wrap: wrap');


    for (let i = 1; i < 17; i++) {  //repat the process exactly 16 times

        let aColumn = document.createElement('div'); //create a column

        aColumn.classList.add('column');
        aColumn.id = 'column' + i; //each column gets a consequtive number
        console.log(aColumn.id)  // checking if the column are being intiated correctly
        // aColumn.setAttribute('style', 'border: solid black; background: white;');  


            for(let j = 1; j < 17; j++){
                let aCell = document.createElement('div'); //create a cell div
                aCell.id = 'row ' + i + 'cell ' + j; //naming each cell for checking purposes really

                console.log(aCell.id);

                aCell.setAttribute('style', 'border: solid pink; background: yellow; width: 20px; height: 20px');
                // aCell.textContent = '222';

                aColumn.appendChild(aCell); //add a cell to a row
            }

            grid.appendChild(aColumn);  //attach the row to the grid

        }
