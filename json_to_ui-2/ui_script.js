
//Data to be added.

let data =[{
                name: 'Vishal',
                age: 18,
                class: 'D',
            },{
                name: 'Raj',
                age: 19,
                class: 'C',
            },{
                name: 'Kumar',
                age: 20,
                Class: 'D',
            }];

// Function for the map function.

function insert(obj)
{
    var row = table.insertRow();
    for (key in obj)
    {
        var cell = row.insertCell();
        cell.innerHTML = obj[key];
    }
 
}

// Creating the variables and the table.

let table = document.createElement('table');
table.border = 1;
let tablehead = table.insertRow();
for(let i=0 ;i<3;i++)
{  
       var th = document.createElement('th');
        
       if(i==0)
           th.innerHTML='NAME';
       if(i==1)
           th.innerHTML='AGE';
       if(i==2)
           th.innerHTML='CLASS';

        tablehead.appendChild(th);

}

// Function call.

data.map(insert);
document.body.appendChild(table);