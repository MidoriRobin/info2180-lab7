window.onload = function(){
    
    const subButton = document.getElementById("lookup");
    const result = document.getElementById("result");
    const country = document.getElementById("country").value;
    const all = document.getElementsByName("all").value;
    
    console.log("This is console test");
    /*subButton.addEventListener("click", function(){
        
    });*/
    
    var searchFunc = () => {
        console.log("the function has beeen triggered");
        /*
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
            
            searchReq.open('get',"world.php?country=" + country);
            searchReq.send();
            */
    };
    
    subButton.addEventListener("click", function(){
        console.log("This buttoooon has been clicked");
        console.log(all);
        //searchFunc();
    });
    
    
    
}
//ctrl+alt+R rename variables