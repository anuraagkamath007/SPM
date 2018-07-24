fetch('http://localhost:3000/process', {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    credentials: 'include'
}).then(
    function (response) {
        return (response.text());
    }
).then(
    function (res) {
        ts = new Date().getTime();
        if (JSON.parse(res).length > 0) {
            console.log(res);
            document.getElementById('noProcesses').style.display = "none";
            document.getElementById('processes').style.display = "table";
            alpha = JSON.parse(res);
            for (var i = 0; i < alpha.length; i++) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>" + (i + 1) + "</td><td>" + alpha[i].processName + "</td><td>" + alpha[i].steps.length + "</td><td>0</td><td>0</td><td>0</td><td class='edit' id=" + alpha[i]._id + "><a href=#pro" + alpha[i]._id + ">Edit</a></td><td class='trigger'><a href=#frm" + alpha[i]._id + "$" + alpha[i].formName + ">Trigger</a></td>"
                document.getElementById('processes-body').appendChild(row);
            }
        }
    })