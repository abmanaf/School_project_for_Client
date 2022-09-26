var question = document.forms['form']['question'];
// ("ques");

var question_error = document.getElementById('question_error');
        
        //txt.addEventListener('textInput', email_verify);

function decisionMaker(){
    if(question.value.length == " " ){
        question.style.border = "1px solid red";
        question_error.style.display = "block";
        question.focus();
        return false;
    }
}

