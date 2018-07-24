fetch('http://localhost:3000/forms', {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    credentials:'include'
    
}).then(
    function (response) {
        return (response.text());
    }
).then(
    function (res) {
        ts = new Date().getTime();
        if (JSON.parse(res).length > 0) {
            document.getElementById("noForms").style.display="none";
            alpha = JSON.parse(res);
            for (var i = 0; i < alpha.length; i++) {
                var row = document.createElement("tr");

                row.innerHTML = "<td>" + (i + 1) + "</td><td>" + alpha[i].name + "</td><td class='edit' id=edit_" + alpha[i]._id + ">Edit</td>"
                document.getElementById('form-body').appendChild(row);
                document.getElementById("edit_" + alpha[i]._id).addEventListener('click', (event) => {
                    window.location.hash="#frmbdr"+String(event.target.id).replace("edit_","");
                });
             
                
            }
        }
        else{
            document.getElementById("forms").style.display="none";

        }
    })
