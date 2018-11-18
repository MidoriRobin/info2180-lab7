window.onload = function(){
    
    const subButton = document.getElementById("lookup");
    const result = document.getElementById("result");
    //console.log("This is cconsole test");
    /*subButton.addEventListener("click", function(){
        
    });*/
    
    var searchFunc = () => {
        console.log("the function ha beeen triggered");
        var searchReq = new XMLHttpRequest();
                
            searchReq.onreadystatechange = function() {
                
                console.log("ready state check");
                
                if (searchReq.readyState == 4 && searchReq.status == 200) {
                    console.log("Success");
                    //document.getElementById("result").innerHTML = searchReq.responseText;
                    alert(searchReq.responseText);
                    result.innerHTML = searchReq.responseText;
                } else{
                    //alert("There is an error");
                    console.log("there is an error");
                }
            };
            
            searchReq.open('get',"world.php?country=" + document.getElementById("country").value);
            searchReq.send();
    };
    
    subButton.addEventListener("click", function(){
        console.log("This button has been clicked");
        searchFunc();
    });
    
    
    
}
//ctrl+alt+R rename variables