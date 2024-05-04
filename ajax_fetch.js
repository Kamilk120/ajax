function cos(value, box){
    value = value.toLowerCase();
    fetch('sugest.php?value='+value)
    .then((response) => response.text())
    .then((result) => {
        document.getElementById('box').innerHTML = result;
    })
    .catch((err) => console.log(err));
}