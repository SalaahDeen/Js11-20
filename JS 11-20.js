



function firstLast6(arr) {

    var last = arr[arr.length-1];
    var first = arr[0];
    if(  first ==  6 || last == 6){
        return true;
    }else{
        return false;
    }
}




function has23(arr) {
    var last = arr[arr.length-1];
    var first = arr[0];
    if(  first ==  2 || last == 2){
        return true;
    }else if( first == 3 || last == 3 ){
        return true;
    }else {
        return false;
    }

}





function fix23(arr){
    if(arr[0] == 2 && arr[1] == 3){
        arr[1] = 0;
    }
    if(arr[1] == 2 && arr[2] == 3){
        arr[2] = 0;
    }
    return arr;
}



function countYZ(str){
  str = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < str.length; i++){
      if( str[i] == " " && str[i-1] == "z"){
          count = count + 1;
      }
      if(str[i] == " " && str[i-1] == "y"){
          count = count + 1;
      }

    }
    var lastOne = str.length-1;
    if(str[lastOne] == "y"){
        count = count + 1;
    }
    if(str[lastOne] == "z"){
        count = count + 1;
    }
    return count;
}

 //need explained
function endOther(str, xyz) {
    str = str.toLowerCase();
    xyz = xyz.toLowerCase();
    if (str.endsWith(xyz) == true) {

        return true;
    }
    if (xyz.endsWith(str) == true) {
        return true;
    } else {
        return false;
    }
}


function starOut(str){
    var newWord = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != "*" && str[i-1] != "*" && str[i + 1] != "*"){
            newWord = newWord + str[i];
        }
    }
    return newWord;
}


function getSandwich(str){
    var newWord = ""
   if(str.indexOf("bread") == str.lastIndexOf("bread")){
       return newWord;
   }
  var firstBread =  str.indexOf("bread")+ 5;
    var secondBread = str.lastIndexOf("bread");
    return str.substring(firstBread, secondBread);

}

function canBalance(arr){
    var iSum = 0;
    var jSum = 0;
    for(var i = 0; i < arr.length; i++){
        iSum = iSum + arr[i];
        for(var j = i + 1; j < arr.length; j++){
            jSum = jSum + arr[j];

        }
        if(jSum == iSum){
            return true;
        }else {
            jSum = 0;
        }
    }
    return false;
}




function countClumps(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[i + 1] && arr[i] != arr[i-1] ){
            count = count + 1;
        }

    }
    return count;
}



function evenlySpaced(a, b, c){
    var arr = [a, b, c]
    arr.sort();
    if(arr[0] - arr[1] == arr[1] - arr[2]){
        return true;
    }else{
        return false;
    }
}

evenlySpaced(9,10,11)





