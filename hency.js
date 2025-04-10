let inactivityTimer;

function search() {
  const searchEngine = document.getElementById("searchEngine").value;
  const query = document.getElementById("query").value;
  if (query.trim()=== "") return;
  window.open(searchEngine + encodeURIComponent(query),"_self");
  
}

// EventListener to capture the event of the button 

// when user clicks the button 
document.getElementById('searchButton').addEventListener('click',search);


// when user clciks enter 

document.getElementById("query").addEventListener("keypress",
  function(e){
    if(e.key === "Enter"){
      search();
    }
  }
)

function startInactivityTimer(){
  clearTimeout(inactivityTimer);
  
  inactivityTimer = setTimeout(function(){
    alert('/!\\What the hell are you doing on this page ? /!\\');
  }, 6000)

}

document.getElementById("query").addEventListener("input", startInactivityTimer);
document.getElementById('searchButton').addEventListener('click', startInactivityTimer);

startInactivityTimer();

