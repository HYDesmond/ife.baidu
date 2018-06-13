function setChart(){
    var table=document.getElementById("table-wrapper").getElementsByTagName("table");
    var canvans=document.getElementById("canvans");
    var line=new Line(canvans,40,10);
    var f=false;
    if(table.length==0){
        return;
    }
    table[0].onmouseover=function(event){
        event=event || window.event;
        var node=null;
        var tdArr=[];
        var arr=[];
        if(event.target.nodeName=='TD'){
           node=event.target.parentNode;
        }else if(event.target.nodeName=='TR'){
            node=event.target;
        }else{
            return ;
        }
        var tdArr=node.getElementsByTagName("td");
        for(var i=2;i<tdArr.length;i++){
            if(tdArr[i].innerHTML.indexOf("月")!=-1){
                break;
            }else{
                arr.push(tdArr[i].innerHTML)
            }
        }
        
        if(arr.length!=0){
            createBar("svg",arr);
            if(!f){
                line.drawAxis();
                f=true;
            }
            line.drawLine(arr,color());
        }
    }
    table[0].onmouseleave=function(){
        
         line.clear();
    }
   
}
function color(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+','+g+','+b+")";
}
