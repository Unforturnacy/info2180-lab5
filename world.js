function searchList()
{
    var result = document.getElementById("result");
    var val = document.getElementById("country");
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE){
            if(req.status === 200)
            {
                result.innerHTML = req.responseText
            } 
            else
            {
                console.log("Error")
            }
        }
    }
    req.open("GET",`http://localhost/info2180-lab5/world.php?country=${val.value}`, false)

    req.send();
}




window.onload = function() {
    console.log("Page loaded");
    var  but = document.getElementById("lookup");
    but.addEventListener("click", searchList);
  
};