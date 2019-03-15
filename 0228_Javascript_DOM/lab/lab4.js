
function H1(tagName, attributes){

    let node = document.createElement(tagName); 
    
    for (let key in attributes) {
        node.setAttribute(key, attributes[key]);
    };

    return node
}


h('div')


items.forEach(function(item){
    copy.push(item);
  });