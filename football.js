// const root = 'https://raw.githubusercontent.com/Mihrusha/football_json/master';

// const asyncFetchPosts = async() => (
//   fetch(`${root}/football.json`)
//   .then(res => res.json())
// );
  
var rawbase = 'https://raw.githubusercontent.com/';
var jsonloc = 'Mihrusha/football_json/master/football.json';


$.getJSON(rawbase + jsonloc, function( data ) {
    for (var i = 0; i < data.length; i++) {
        var tr = $('<tr/>');
        
        
        $(tr).append("<td>" + data[i].name + "</td>");
        $(tr).append("<td>" + data[i].flag_country + "</td>");
        $(tr).append("<td>" + data[i].matches + "</td>");
        $(tr).append("<td>" + data[i].win + "</td>");
        $(tr).append("<td>" + data[i].draw + "</td>");
        $(tr).append("<td>" + data[i].lose + "</td>");
        $(tr).append("<td>" + data[i].score + "</td>");
        $(tr).append("<td>" + data[i].goals + "</td>");
        $(tr).append("<td>" + data[i].conceded_goals + "</td>");
        $(tr).append("<td>" + data[i].place + "</td>");
        $(tr).append("<td>" + data[i].color + "</td>");
        $('.table').append(tr);
      }
    });


    function sortTable(n) {
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        
        dir = "asc"; 
       
        while (switching) {
         
          switching = false;
          rows = table.getElementsByTagName("TR");
         
          for (i = 1; i < (rows.length - 1); i++) {
           
            shouldSwitch = false;
           
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
           
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                
                shouldSwitch= true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                
                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
           
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            
            switchcount ++;      
          } else {
           
            if (switchcount == 0 && dir == "asc")
             {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
    

