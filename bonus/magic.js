var create = function(x,y,color, name){
    // set div attributes
    var div = document.createElement('div');
    div.id = name;
    div.style.zIndex = '1';
    div.style.position = 'absolute';    
    div.style.left = x + 'px';    
    div.style.top = y + 'px';    
    div.style.width = '75px';    
    div.style.height = '75px';    
    div.style.borderRadius = '50%';
    div.style.background = color;    

    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    return div;        
};

