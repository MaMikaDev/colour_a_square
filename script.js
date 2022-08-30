const container = document.querySelector('#grid');

container.setAttribute('style', 'display: grid; grid-template-columns: auto auto;')


    for (let i = 0; i < 17; i++) {
        let aColumn = document.createElement('div');

        aColumn.id = 'column' + i;
        console.log(aColumn.id)
        aColumn.setAttribute('style', 'border: solid black; background: white;');  
       

        container.appendChild(aColumn);

        let aRow = document.getElementById('column' + i);

        for(let j = 0; j < 17; j++){

            let aCell = document.createElement('div');
            aCell.textContent = 'Hi';

            aRow.appendChild(aCell);
    
        }

        

    }