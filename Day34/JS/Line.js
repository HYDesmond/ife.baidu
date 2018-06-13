function Line(elem,padding,arrowWidth){
    this.elem=elem;
    this.padding=padding;
    this.arrowWidth=arrowWidth;
}
Line.prototype={
    constructor:Line,
    context:function(){
        return this.elem.getContext("2d");
    },
    createLineDate:function(){
        return {
            padding:this.padding,  //边距
            arrowWidth:this.arrowWidth,    //箭头的宽度
            x0:this.padding,  //原点x轴坐标
            y0:this.elem.height - this.padding,  //原点y轴坐标
            xArrow_x:this.padding, //y轴箭头处坐标x
            xArrow_y:this.padding, //y轴箭头处坐标y
            yArrow_x:this.elem.width - this.padding,  //x轴箭头处坐标x
            yArrow_y:this.elem.height - this.padding, //x轴箭头处坐标y
            xLength:this.elem.width - 2*this.padding - this.arrowWidth,    //x轴的长度
            yLength:this.elem.height - 2*this.padding -this.arrowWidth,  //y轴的长度
            pointsWidth:(this.elem.width - 2*this.padding - this.arrowWidth)/(13)//x坐标等分距离
        }
    },
    drawAxis:function(){
        var ctx=this.context();
        var LineData=this.createLineDate();
        ctx.beginPath();

         // 绘制y轴
        ctx.moveTo(LineData.x0, LineData.y0);
        ctx.lineTo(LineData.xArrow_x, LineData.xArrow_y);
        //绘制y轴箭头
        ctx.moveTo(LineData.xArrow_x, LineData.xArrow_y);
        ctx.lineTo(LineData.xArrow_x - LineData.arrowWidth, LineData.xArrow_y + LineData.arrowWidth);
        ctx.moveTo(LineData.xArrow_x, LineData.xArrow_y);
        ctx.lineTo(LineData.xArrow_x + LineData.arrowWidth, LineData.xArrow_y + LineData.arrowWidth);
        ctx.strokeStyle = "#000";
        ctx.stroke();

        // 绘制x轴
        ctx.moveTo(LineData.x0, LineData.y0);
        ctx.lineTo(LineData.yArrow_x, LineData.yArrow_y);
        //绘制x轴箭头
        ctx.moveTo(LineData.yArrow_x, LineData.yArrow_y);
        ctx.lineTo(LineData.yArrow_x - LineData.arrowWidth, LineData.yArrow_y - LineData.arrowWidth);
        ctx.moveTo(LineData.yArrow_x, LineData.yArrow_y);
        ctx.lineTo(LineData.yArrow_x - LineData.arrowWidth, LineData.yArrow_y + LineData.arrowWidth);
        ctx.strokeStyle = "#000";
        ctx.stroke();

        // 绘制y轴文字
        ctx.font = "14px 微软雅黑";
        ctx.textBaseline = "middle";
        ctx.fillStyle="#999";
        for (var i = 0; i <8; i++) {
           ctx.fillText((100*i)+"元", 0,LineData.y0 -(LineData.yLength/ (8))*i);
       }
       // 绘制x轴文字
       ctx.textBaseline = "top";
       for (var i = 0; i <12; i++) {
           ctx.fillText((i+1)+"月", LineData.padding + i  * LineData.pointsWidth,LineData.yArrow_y);
      }
    },
    drawLine:function(data,color){        
        var ctx=this.context();
        var LineData=this.createLineDate();
        ctx.beginPath();
        //绘制折线
        for (var i = 0; i < data.length; i++) {
            var pointX = LineData.padding + i * LineData.pointsWidth;
            var pointY = LineData.yArrow_y  - ((data[i]/700) * ((LineData.yLength/ 8)*7+7));
            ctx.lineTo(pointX, pointY);
        }
        ctx.strokeStyle=color;
        ctx.stroke();
        //绘制折线上的点
        for (var i = 0; i < data.length; i++) {
            var pointX = LineData.padding + i * LineData.pointsWidth;
            var pointY = LineData.yArrow_y  - ((data[i]/700) * ((LineData.yLength/ 8)*7+7));
            ctx.beginPath();
            ctx.arc(pointX,pointY,3,0,Math.PI*2);
            ctx.fill();
        }
    },
    clear:function(){
        var ctx=this.context();
        // 清除画布,只把坐标轴显示出来
        ctx.clearRect(0,0,this.elem.width,this.elem.height);
        this.drawAxis();
    }
}
