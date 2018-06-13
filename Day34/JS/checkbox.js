var tableWrapper=document.getElementById("table-wrapper");
    function createCheckBox(id){
        var wrap=document.getElementById(id);
        var checkArr=wrap.getElementsByTagName("input");
        var allBtn=checkArr[checkArr.length-1];
        wrap.onclick=function(event){
            event=event||window.event;
            var target=event.target;
            var len=0;
            if(target.nodeName=="INPUT"){
                if(target.getAttribute("checkbox-type")=="all"){
                    if(target.checked){
                        for(var i=0;i<checkArr.length;i++){
                            checkArr[i].checked=true;
                        }
                    }else{
                        for(var i=0;i<checkArr.length;i++){
                            checkArr[i].checked=false;
                        }
                    }
               }else{
                   for(var i=0;i<checkArr.length-1;i++){
                       if(checkArr[i].checked==true){
                           len++;
                       }
                    }
                    if(len==0){
                        return false;
                    }
                    if(len==checkArr.length-1){
                        allBtn.checked=true;
                    }else{
                        allBtn.checked=false;
                    }
               }
            }
            var data=getDataByselect();
            checkbox1=whoSelect("region-radio-wrapper");
            checkbox2=whoSelect("product-radio-wrapper");
            tableWrapper.innerHTML=renderTable(checkbox1,checkbox2,data);
            var table=tableWrapper.getElementsByTagName("table");
            if(table.length==0){
                var svg=document.getElementById("svg");
                var canvans=document.getElementById("canvans");
                var ctx=canvans.getContext("2d");
                svg.innerHTML="";
                ctx.clearRect(0,0,canvans.width,canvans.height);
            }else{
                setChart();
            }
            
            
        }
    }
    function whoSelect(id){
        var arr=[];
        var wrap=document.getElementById(id);
        var checkArr=wrap.getElementsByTagName("input");
        for(var i=0;i<checkArr.length-1;i++){
            if(checkArr[i].checked==true){
                arr.push(checkArr[i].value);
            }
        }
        return arr;
    }