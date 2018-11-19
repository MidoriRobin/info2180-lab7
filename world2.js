
/*Added a this world2.js file because for some reason cloud 9 wasnt updating from the original world.js file and I had no idea why, 
    after some searching however i found that this was a problem not just limited to me, and this was the only solution*/
    
window.onload = function(){
    
    const subButton = document.getElementById("lookup");
    const result = document.getElementById("result");
    const country = document.getElementById("country").value;
    const all = document.getElementsByName("all")[0];
    
    var searchFunc = () => {
        console.log("the function has beeen triggered");
        
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
            
            if(all.checked == true){
                console.log("all true");
                searchReq.open('get',"world.php?all=" + all);
                searchReq.send();
                
            }else if(all.checked == false && country == null){
                searchReq.open('get',"world.php?country=" + country);
                searchReq.send();
                
            }else{
                alert("No parameters entered");
            }
    };
    
    subButton.addEventListener("click", function(){
        searchFunc();
    });
    
    
    
}
//ctrl+alt+R rename variables