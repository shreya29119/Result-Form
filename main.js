function result(){

     var students = {

       SHREYA : {
         maths: "80",
         physics: "85",
         literature: "90"
       },
       DIVYA : {
         maths: "90",
         physics: "80",
         literature: "93"
       },
       RONIT : {
         maths: "72",
         physics: "65",
         literature: "95"
       },
       SURESH : {
         maths: "56",
         physics: "89",
         literature: "70"
       },
       DIVYANSHU : {
         maths: "98",
         physics: "82",
         literature: "98"
       }
     }

     var studentname = document.getElementById('studentname').value;
     var input = studentname.toUpperCase();
     var definition = students[input];
     var output = document.getElementById("output");

     if(definition == undefined){
       output.innerHTML= `<hr>There is no information about the student. <hr>`;
     }
     else {
       output.innerHTML= ` <hr> Maths score is ${definition.maths}. <hr> Physics score is ${definition.physics}. <hr> literature score is ${definition.literature} <hr>`;
     }
};
