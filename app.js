function check() {
    var score = 0;
    var right_answar_01 = document.getElementById('q1-a1');
    var q1_answar_02 = document.getElementById('q1-a2');
    var q1_answar_03 = document.getElementById('q1-a3');
    var q1_answar_04 = document.getElementById('q1-a4');
    if (right_answar_01.checked == true) {
        score++;
        alert("Q1 is correct")
    }
    else{
        alert("Q1 is wrong")
    }



    var right_answar_02 = document.getElementById("q2-a1");
    var q2_answar_02 = document.getElementById('q1-a2');
    var q2_answar_03 = document.getElementById('q1-a3');
    var q2_answar_04 = document.getElementById('q1-a4');
    if (right_answar_02.checked == true) {
        score++;
        alert("Q2 is correct answar");
        
    }
    else {
        alert("Q2 is wrong answar");
    }




    var right_answar_03 = document.getElementById("q3-a1");
    var q3_answar_02 = document.getElementById('q3-a2');
    var q3_answar_03 = document.getElementById('q3-a3');
    var q3_answar_04 = document.getElementById('q3-a4');
    if (right_answar_03.checked == true) {
        score++;
        alert("Q3 is correct answar");
        
    }
    else {
        alert("Q3 is wrong answar");
    }
    alert("Your score is " +score++)
}
