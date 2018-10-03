const say = function (name) {
    var div = document.createElement("div");
    div.style.backgroundColor = "green";     
    var t = document.createTextNode(`Hello, ${name}`);      
    div.appendChild(t);                             
    document.body.appendChild(div);   
}

export default say;
