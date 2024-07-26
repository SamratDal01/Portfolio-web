var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x=Document.getElementsByClassName("myslides");
    for(i=0;i<x.length;i++){
        x[i].xtyle.display="none";
    }
    myIndex++;
    if(myIndex>x.length){myIndex=1} x[myIndex-1].style.display ="block";
    setTimeout(carousel,3000);
}