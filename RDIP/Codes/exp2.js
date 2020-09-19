
  var text=["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough.When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, fit how shall I climb out?' Just then a rat came along with, and he heard the mouse. 'Mouse,' said the rat, if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",
  "A wolf carried off a lamb. The lamb said, ' I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",
  "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."
  ]
   var x=text[0];
   var y=text[1];
   var z=text[2];
 
  function corpusFun(){
  let select=document.getElementById('select').value;
  if(select=="Corpus1"){
  token1();
    document.getElementById('demo').innerHTML=x;
  }
  else if(select=="Corpus2"){
  token2();
   document.getElementById('demo').innerHTML=y;
  }
  else{
  token3();
   document.getElementById('demo').innerHTML=z;
  }
 }
//tockens code
//corpus 1
 function token1(){
  return x.split(' ').length;
  }
  var tok1=token1();
  console.log(tok1);
//corpus 2
 function token2(){
  return y.split(' ').length;
  }
  var tok2=token2();
  console.log(tok2);
//corpus 3
 function token3(){
  return z.split(' ').length;
  }
  var tok3=token3();
  console.log(tok3);
//types code
 //type 1
  const types=s=>s.replace(/(\b\S.+\b)(?=.*\1)/g, "");
  var t1=(types(x));
  var typ1=t1.split(' ').length;
  console.log(typ1);
 //type 2
var t2=(types(y));
  var typ2=t2.split(' ').length;
  console.log(typ2);
 //type 3
var t3=(types(z));
  var typ3=t3.split(' ').length;
  console.log(typ3);
//get input value
function tokenType(){
var tokip=document.getElementById("ip1");
var typip=document.getElementById("ip2");
let select=document.getElementById('select').value;
  if(select=="Corpus1"){
   if(tokip.value!=tok1 && typip.value==typ1 ){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="green";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value==tok1 && typip.value!=typ1){
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value!=tok1 && typip.value!=typ1){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else{
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="green";
    document.getElementById('right').innerHTML=`Right Answer<br><br><input type="button" class="btn" value="Continue">`;
   }
  }
  else if(select=="Corpus2"){
   if(tokip.value!=tok2 && typip.value==typ2 ){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="green";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value==tok2 && typip.value!=typ2){
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value!=tok2 && typip.value!=typ2){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else{
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="green";
    document.getElementById('right').innerHTML=`Right Answer<br><br><input type="button" class="btn" value="Continue">`;
   }
  }
  else {
     if(tokip.value!=tok3 && typip.value==typ3 ){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="green";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value==tok3 && typip.value!=typ3){
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else if(tokip.value!=tok3 && typip.value!=typ3){
    tokip.style.backgroundColor="red";
	typip.style.backgroundColor="red";
    document.getElementById('wrong').innerHTML="Wrong Answer";
   }
   else{
    tokip.style.backgroundColor="green";
	typip.style.backgroundColor="green";
    document.getElementById('right').innerHTML=`Right Answer<br><br><input type="button" class="btn" value="Continue">`;
   }
  }
  
  $(document).ready(function(){
   $(".btn").click(function(event){
     event.preventDefault();
     $(this).hide();
     $("#newmsg").show();
     $("#right").hide();
     $("#sub").hide();
	 $("#new").show();
   });
  });
}


//new types code
var new1=73;
function newTypes(){
    
    var ntip=document.getElementById("ip3");
    let selectn=document.getElementById('select').value;
    console.log(selectn);
    if(selectn=="Corpus1"){
        if(ntip.value==new1){
         ntip.style.backgroundColor="green";
         document.getElementById('nwmsg1').innerHTML="Right Answer";
        }
        else{
            ntip.style.backgroundColor="red";
         document.getElementById('nwmsg2').innerHTML="Wrong Answer";

        }
    }
    else if(selectn=="Corpus2"){
        if(ntip.value==new2){
         ntip.style.backgroundColor="green";
         document.getElementById('nwmsg1').innerHTML="Right Answer";
        }
        else{
            ntip.style.backgroundColor="red";
         document.getElementById('nwmsg2').innerHTML="Wrong Answer";

        }
    }
    else{
        if(ntip.value==new3){
         ntip.style.backgroundColor="green";
         document.getElementById('nwmsg1').innerHTML="Right Answer";
        }
        else{
            ntip.style.backgroundColor="red";
         document.getElementById('nwmsg2').innerHTML="Wrong Answer";

        }
    }
}

//jQuery code
$("#div1").hide();
$("#sub").hide();
$("#newmsg").hide();
$("#new").hide();
$(document).ready(function(){
 $("select").change(function(){
  $("#div1").show();
  $("#sub").show();
 });
 });


 var Snowball=require('snowball');
 var stemmer=new Snowball('English');
 stemmer.setCurrent(x);
 stemmer.stem();
 var n1=(stemmer.getCurrent());
 var n4=(types(n1));
 var ne1=n4.split(' ').length;
  console.log(new1);

 stemmer.setCurrent(y);
 stemmer.stem();
 var n2=(stemmer.getCurrent());
 var n5=(types(n2));
 var ne2=n5.split(' ').length;
 console.log(new2);

 stemmer.setCurrent(z);
 stemmer.stem();
 var n3=(stemmer.getCurrent());
 var n6=(types(n3));
 var ne3=n6.split(' ').length;
 console.log(new3);
