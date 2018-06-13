


  function renderTable(arr1,arr2,data) {
    var temp=``;
    if(data.length==0){
        return;
    }
    temp+=`<table border="1">`;
    temp+=`<tr>`
    if(arr2.length<arr1.length&&arr2.length==1){
        temp+=`<td>商品</td><td>地区</td>`
    }else if(arr2.length>arr1.length&&arr1.length==1){
      temp+=`<td>地区</td><td>商品</td>`
    }else if(arr2.length>1&&arr1.length>1){
      temp+=`<td>商品</td><td>地区</td>`
    }else {
      temp+=`<td>商品</td><td>地区</td>`
    }
      temp+=`
              <td>1月</td>
              <td>2月</td>
              <td>3月</td>
              <td>4月</td>
              <td>5月</td>
              <td>6月</td>
              <td>7月</td>
              <td>8月</td>
              <td>9月</td>
              <td>10月</td>
              <td>11月</td>
              <td>12月</td>
          </tr>
          `
      var rowspanOff=false;
      for(var i=0;i<data.length;i++){
          temp+=`<tr>`
          if(arr2.length<arr1.length&&arr2.length==1){
              if(!rowspanOff){
                  temp+=`<td rowspan="${arr1.length}">${data[i].product}</td>`
                  rowspanOff=true;
              }
              temp+=`<td>${data[i].region}</td>`
          }else if(arr2.length>arr1.length&&arr1.length==1){
              if(!rowspanOff){
                  temp+=`<td rowspan="${arr2.length}">${data[i].region}</td>`
                  rowspanOff=true;
              }
              temp+=`<td>${data[i].product}</td>`
          }else if(arr2.length>1&&arr1.length>1){
             if(i%arr1.length==0){
              rowspanOff=false;
             }
              if(!rowspanOff){
                  temp+=`<td rowspan="${arr1.length}">${data[i].product}</td>`
                  rowspanOff=true;
              }
              temp+=`<td>${data[i].region}</td>`
          }else {
              temp+=`<td>${data[i].product}</td>`
              temp+=`<td>${data[i].region}</td>`
          }
          for(var j=0;j<data[i].sale.length;j++){
              temp+=`<td>${data[i].sale[j]}</td>`                     
          }
          
          temp+=`</tr>`
      }
      temp+=`</table>`;
      return temp;
}