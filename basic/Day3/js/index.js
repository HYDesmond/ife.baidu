let scrollFunc = function (e) {

  let oDiv=document.getElementById('div1');

  let aDiv = oDiv.getElementsByTagName('div');

   e = e || window.event;  

   if (e.wheelDelta) {  
     //判断浏览器IE，谷歌滑轮事件          
     if (e.wheelDelta > 0) { 
       //当滑轮向上滚动时,只显示第一页
       aDiv[0].style.display = 'block';

       aDiv[1].style.display = 'none';

       //console.log("滑轮向上滚动"); 

     }  
     if (e.wheelDelta < 0) { 

       //当滑轮向下滚动时，只显示第二页
       aDiv[0].style.display = 'none';

       aDiv[1].style.display = 'block';

       //console.log("滑轮向下滚动");  
     }  
   } else if (e.detail) {  
   //Firefox滑轮事件  
       if (e.detail> 0) { 
         //当滑轮向上滚动时，只显示第一页
         aDiv[0].style.display = 'block';

         aDiv[1].style.display = 'none';

         //console.log("滑轮向上滚动");  
       }  
       if (e.detail< 0) { 
         //当滑轮向下滚动时，只显示第二页
         aDiv[0].style.display = 'none';

         aDiv[1].style.display = 'block';

         //console.log("滑轮向下滚动");  
       }  
     }  
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {
      //firefox  
     document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc; 

    console.log('你在偷看我');