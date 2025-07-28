'use strict';
  function atom1(){
    alert("atom1함수 호출 : ");
  }

  function atom2(msg){
    alert("atom2함수 호출 : " + msg);
  }

  function atom3(su){
    alert("atom3함수 호출 : " + (su + 100));
  }

  function atom4(su1, su2){
    alert("atom4함수 호출 : " + (su1 + su2) + "\n" + (su1 - su2) + "\n" + (su1 * su2) + "\n" + (su1 / su2) + "\n");
  }

  function atom5(name, age){
    let intAge = parseInt(age); // age가 문자로 넘어왔을때 (+) 연산하면 붙어서 나오기때문에 형변환 해줬다. 
    alert("atom4함수 호출 : " +"\n성명 : " + name + "\n나이 : " + (intAge + 1));
  }