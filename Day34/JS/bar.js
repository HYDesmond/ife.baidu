function createBar(id,data){
    document.getElementById(id).innerHTML="";
    var maxNum = Math.max.apply(null, data); 
    var svg=document.createElementNS("http://www.w3.org/2000/svg","svg");
    var wrapWidth=600,//容器宽
        wrapHeight=400,//容器高
        padding = 40,//边距
        arrowWidth = 10, //箭头的宽度
        x0 = padding,  //原点x轴坐标
        y0 =  wrapHeight - padding,  //原点y轴坐标
        xArrow_x = padding, //y轴箭头处坐标x
        xArrow_y = padding, //y轴箭头处坐标y
        yArrow_x = wrapWidth - padding,  //x轴箭头处坐标x
        yArrow_y = wrapHeight - padding, //x轴箭头处坐标y
        xLength = wrapWidth - 2*padding - arrowWidth,    //x轴的长度
        yLength = wrapHeight - 2*padding - arrowWidth,  //y轴的长度
        interval = (xLength/(data.length + 1))/2;//柱形图之间的间距
        rectW= (xLength/(data.length + 1))/2,//柱形图的宽度

        // 设置宽高,并添加到给定ID的容器中
        svg.setAttribute('width', wrapWidth+'px');
        svg.setAttribute('height', wrapHeight+'px');
        document.getElementById(id).appendChild(svg);


        // 绘制y、x轴
        svg.innerHTML+=`<g stroke="#545454" stroke-width="3">
        <line x1="${xArrow_x}" y1="${xArrow_y}" x2="${x0}" y2="${y0}"></line>
        <line x1="${x0}" y1="${y0}" x2="${yArrow_x}" y2="${yArrow_y}"></line>
        <polyline points="${xArrow_x-10},${xArrow_y+10} ${xArrow_x},${xArrow_y} ${xArrow_x+10},${xArrow_y+10}" fill-opacity="0"></polyline>
        <polyline points="${yArrow_x-10},${yArrow_y-10} ${yArrow_x},${yArrow_y} ${yArrow_x-10},${yArrow_y+10}" fill-opacity="0"></polyline>
        </g>`;

        // 绘制y轴文字,间隔为8
        for(var i=0;i< 8;i++){
          svg.innerHTML+=`<text x="${0}" y="${y0 -(yLength/ (8))*i}" fill="black">${(100*i)}</text>`
        }


         // 绘制柱形图,以及x轴文字
        for(var i=0;i<data.length;i++){
          svg.innerHTML+=`
          <text x="${padding+(i+1)*(interval+rectW)}" y="${yArrow_y+20}" fill="black">${(i+1)+"月"}</text>
          <text x="${padding + (i +1) * (xLength/(data.length + 1))-4}" y="${yArrow_y  - ((data[i]/700) * ((yLength/ 8)*7+7))}" fill="black">${data[i]}</text>
          `
          var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("width", rectW);
          rect.setAttribute("height", ((data[i]/700) * ((yLength/ 8)*7+7)));
          rect.setAttribute("x", padding + (i +1) * (xLength/(data.length + 1)));
          rect.setAttribute("y", yArrow_y  - ((data[i]/700) * ((yLength/ 8)*7+7)));
          rect.setAttribute("fill", "red");
          svg.appendChild(rect);
        }

}