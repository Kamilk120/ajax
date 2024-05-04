function co(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("box").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "cos.txt", true);
    xhttp.send();
}