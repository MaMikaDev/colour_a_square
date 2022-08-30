const grid = document.querySelector('#grid');


// grid.setAttribute('style', 'display: grid; grid-template-columns: auto auto;')


    for (let i = 0; i < 16; i++) {  //repat the process exactly 16 times

        let aRow = document.createElement('div'); //create a row

        aRow.classList.add('row');
        aRow.id = 'row' + i; //each row gets a consequtive number
        console.log(aRow.id)  // checking if the rows are being intiated correctly
        aRow.setAttribute('style', 'border: solid black; background: white;');  
       
        aRow.textContent = 'I need to figure it out lol ' + i;

        const rows = document.getElementsByClassName('row');

            for(let j = 0; j < 16; j++){
                let aCell = document.createElement('div'); //create a cell div
                aCell.id = 'r' + i + 'c' + j; //naming each cell for checking purposes really

                console.log(aCell.id);

                aCell.setAttribute('style', 'border: solid pink; background: yellow;');
                aCell.textContent = 'hello?';

                aRow.appendChild(aCell);
            }

            grid.appendChild(aRow);  //attach the row to the grid

        }
