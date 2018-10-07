const say = function (name) {
    const div = document.createElement('div');   
    const t = document.createTextNode(`Hello, ${name}`);      
    div.appendChild(t);                             
    document.body.appendChild(div);
}

export default say;
