var oLink = document.getElementById('link1');

var aBt=document.getElementsByTagName('button');

  for(let i=0;i<aBt.length;i++){

    aBt[i].onclick=function(){

      oLink.href = 'css/css'+(i+1)+'.css';
    
    }

}