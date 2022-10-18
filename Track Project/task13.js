let arts=[];
function myMusic() {
    let htmlSelect = document.getElementById("musicList");
    htmlSelect.style.visibility = "hidden";

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    
        sessionStorage.setItem("artists", JSON.stringify(arts));  //sessionStorage object stores data only for a session. Another tab with the same page will have a different storage
        sessionStorage.setItem("hasCodeRunBefore", true);
        }

        else {
        arts = JSON.parse(sessionStorage.getItem("artists"));
        let i = 0;
        let musicList = document.getElementById('musicList');
        musicList.innerHTML = null;

        let headRow = document.createElement("tr");    
        let headData1 = document.createElement("th"); //here i'm creating table headings
        headData1.innerHTML = "Artist";

        headRow.appendChild(headData1);
        musicList.appendChild(headRow);

        
        let headData2 = document.createElement("th"); 
        headData2.innerHTML = "Title";

        headRow.appendChild(headData2);
        musicList.appendChild(headRow);

        
        let headData3 = document.createElement("th"); 
        headData3.innerHTML = "Album";

        headRow.appendChild(headData3);
        musicList.appendChild(headRow);

        
        let headData4 = document.createElement("th"); 
        headData4.innerHTML = "Genre";

        headRow.appendChild(headData4);
        musicList.appendChild(headRow);
        

            arts.forEach(function(a, index) {
           
            i = i + 1;

            let row = document.createElement("tr");

            let data1 = document.createElement("td");
            let input1 = document.createElement("input");
            input1.type = "text";
            input1.value = a.name.artist;
            data1.appendChild(input1);

            let data2 = document.createElement("td");
            let input2 = document.createElement("input");
            input2.type = "text";
            input2.value = a.name.title;
            data2.appendChild(input2);

            let data3 = document.createElement("td");
            let input3 = document.createElement("input");
            input3.type = "text";
            input3.value = a.album;
            data3.appendChild(input3);

            let data4 = document.createElement("td");
            let input4 = document.createElement("input");
            input4.type = "text";
            input4.value = a.genre;
            data4.appendChild(input4);

            let button = document.createElement("button");
            let buttonText = document.createTextNode("x");
            button.appendChild(buttonText);
            button.type = "button";

            button.addEventListener("click", function(){
                arts = JSON.parse(sessionStorage.getItem("artists"));
                arts.splice(index, 1);
                sessionStorage.setItem("artists", JSON.stringify(arts));
                myMusic();
            })

            row.appendChild(data1);
            row.appendChild(data2);
            row.appendChild(data3);  //appendChild() method allows you to add a node to the end of the list of child nodes of a specified parent node.
            row.appendChild(data4);
            row.appendChild(button);

            musicList.appendChild(row);
        });
        if (i > 0) {
            htmlSelect.style.visibility = "visible";
        }
    }
}

function Artist(artist, title, album, genre) {
    this.name = {
        artist: artist,
        title: title
    };
    this.album = album;
    this.genre = genre;
    
}

function addMusic() {
    arts = JSON.parse(sessionStorage.getItem("artists"));   //getItem()method returns value of the specified Storage Object item. 
    let newArtist = new Artist(
        document.getElementById("artName").value,
        document.getElementById("title1").value,
        document.getElementById("album1").value,
        document.getElementById("genre1").value
    );
    arts.push(newArtist);
    sessionStorage.setItem("artists", JSON.stringify(arts));    //setItem()method sets the value of the specified Storage Object item.

    myMusic();
}



















