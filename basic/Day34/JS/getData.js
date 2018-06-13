function getDataByselect(){
    var arr1=whoSelect("region-radio-wrapper");
    var arr2=whoSelect("product-radio-wrapper");
    var arr=[];
    for(var i=0;i<sourceData.length;i++){
        if(arr1.length==0){
          if(arr2.indexOf(sourceData[i].product)!=-1){
            arr.push(sourceData[i]);
          }
        }else if(arr2.length==0){
          if(arr1.indexOf(sourceData[i].region)!=-1){
            arr.push(sourceData[i]);
          }
        }else{
          if(arr1.indexOf(sourceData[i].region)!=-1&&arr2.indexOf(sourceData[i].product)!=-1){
            arr.push(sourceData[i]);
        }
      }
    }
    return arr;
  }