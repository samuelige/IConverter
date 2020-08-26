let btnConverter = document.querySelector('.convert');

var series = 0;

let show = (amount) => {

    var userInput = document.querySelector('#num1').value;
    amount = userInput;


    var notes = [ 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1 ];
    var totalNotes = 0;
    var count = 0;
    var showNote;
    var values;

for(i = 0; i < notes.length; i++){
    count = amount / notes[i];

        if(count !== 0){
            var tableBody = document.querySelector('#build');
            var row = document.createElement('tr');

            showNote = notes[i];

            // create table data for serial number.
            var table = document.createElement('td');
            series++;
            var showSeries = document.createTextNode(series);
            table.appendChild(showSeries);
            row.appendChild(table);


            // create table data for values / amount of times currency appears

            values = Math.floor(count);
            var table = document.createElement('td');
            table.appendChild(document.createTextNode(values));
            row.appendChild(table);


            // create table data for userInput/Amount

            var table = document.createElement('td');
            table.appendChild(document.createTextNode(showNote));
            row.appendChild(table);

            //append row to tbody
            tableBody.appendChild(row);
        }

         totalNotes = totalNotes + count;
         amount = amount % notes[i];
    }

    calculateTotal();

};

let calculateTotal = () => {
    var userInput = document.querySelector('#num1').value;
    
    //declare variable for tbody

    var tableFooter = document.querySelector('#table-footer');

    //create row

    var row = document.createElement('tr');

    //create empty data cell
    var table = document.createElement('td');
    table.appendChild(document.createTextNode(""));
    row.appendChild(table);

    // create data cell for Total
    var table = document.createElement('td');
    table.appendChild(document.createTextNode('Total'));
    row.appendChild(table);

    // create cell for Result of total
    var table = document.createElement('td');
    table.appendChild(document.createTextNode(userInput));
    row.appendChild(table);
    
    tableFooter.appendChild(row)
};

// userInput Function

const digitFormat = () => {
    show();
    clearfield();
}

//function to clear input
clearfield = (() =>{
    document.querySelector('#num1').value = '';
})

btnConverter.addEventListener('click', digitFormat);