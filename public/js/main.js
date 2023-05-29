window.onload = function() {
    // Code to be executed when the document finishes loading
    var dt = new Date();

    document.getElementById('copyr').innerHTML = "Copyright " + dt.getFullYear() + "(c)";
    
    document.getElementById('showClothButton').addEventListener("click", function() { 
        document.getElementsByClassName('not-visible')[0].classList.add("make-it-visible");
        document.getElementsByClassName('not-visible')[1].classList.add("make-it-visible");
        document.getElementsByClassName('not-visible')[2].classList.add("make-it-visible");
    });

    console.log("Document loaded!");

    var clothAvailableNowAndPrice;

    function makeGetRequest(url, callback) { //get request, post request, put request, options request, patch request, delete request
        var xhr = new XMLHttpRequest(); //instantiations
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(null, JSON.parse(xhr.responseText));
                } else {
                    callback(new Error('Request failed with status ' + xhr.status));
                }
            }
        };
        xhr.send(); 
    }

    var endpoint = 'http://localhost:8080/getAllClothesSold';

    document.getElementById('showClothAvailableNow').addEventListener("click", 

        function() { 

            makeGetRequest(endpoint, 
                
                function(error, response) {
                    if (error) {
                        console.error('Error:', error);
                    } else {
                        clothAvailableNowAndPrice = response;
                        console.log('Response:', clothAvailableNowAndPrice);
            
                        // Get the table body element
                        var tableBody = document.querySelector('#clothAvailableNow tbody');
            
                        // Loop through the data array and generate table rows
                        for (let rowIndex = 0; rowIndex < clothAvailableNowAndPrice.length; rowIndex++) {
                            var row = document.createElement('tr');
                            let rowData = clothAvailableNowAndPrice[rowIndex];
            
                            for (const cellData of Object.values(rowData)) {
                                var cell = document.createElement('td');
                                cell.textContent = cellData;
                                row.appendChild(cell);
                            }
            
                            tableBody.appendChild(row);
                        };
                    }
                }
            ); //function call

        }
    );

};
  

