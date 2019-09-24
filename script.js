fetch('adressbok-1.json')
    .then(response => response.json())
    .catch(error => document.write(error))
    .then(function(myJson){

        myJson.sort((a, b) => a.age - b.age);

        var htmlLines = "";

        for (let i = 0; i < myJson.length; i++) {
            htmlLines += "<li><h3>" + myJson[i].firstname + " " + myJson[i].lastname + "</h3>";
            htmlLines += "<p><strong>Ålder:</strong> " + myJson[i].age + "<br/>";
            htmlLines += "<strong>e-post:</strong> " + myJson[i].email + "<br/><br/></p></li>";
        }

        document.getElementById("list").innerHTML = htmlLines;
    })