//script tag is from body tag.

//data to be added
let data = {
	name: "Vishal",
	class: "IT-D",
	marks:[{
		subject: "OOAD",
		mark: "80",
		grade: "A"
        },{
        subject: "AI",
        mark: "90",
        grade: "S"
        }]
    }

for (let key in data)
{
     if (key=='marks')
     {
         let table = document.createElement('table');
         let marks = data['marks'];
         let len = marks.length;
         
         var tablehead = table.insertRow();
         
         for(var i = 0 ;i<3;i++)
         {
            var th = document.createElement('th');
             
            if(i==0)
                th.innerHTML='<th>SUBJECT</th>';
            if(i==1)
                th.innerHTML='<th>MARKS</th>';
            if(i==2)
                th.innerHTML='<th>GRADE</th>';

             tablehead.appendChild(th);
         }
    
         for(let i=0;i<len;i++){
            var row =  table.insertRow();

            for(key2 in marks[i]){
                var cell = row.insertCell();
                cell.innerText = marks[i][key2];
            }
         }
         document.body.appendChild(table);
     }
    else
     {
        let ele = document.createElement('span');
        ele.id = key;
        ele.innerText = data[key];
        document.body.appendChild(ele);
    }
}

// //adding to html file 
// let table = document.createElement('table');

// let span1 = document.createElement('span');
// span1.id = "name";
// span1.innerText = data.name;

//  let span2 = document.createElement('span');
// span2.id = "class";
// span2.innerText = data.class;

// document.body.append(span1);
// span.before(document.prepend(span2));