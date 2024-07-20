console.log("WELCOME JI");
const progressbar = document.getElementById('progress');
const error = document.getElementsByClassName('error');

let count = 0;
document.querySelectorAll('.checkbox').forEach(chcekbox => {
    chcekbox.addEventListener('change', function(){
        // Accessing the id of type=text input indirectly through attribute = datatarrget of checkbox input
        const targetID = this.getAttribute('data-target');
        const textField = document.getElementById(targetID);

        if(this.checked)
        {
            if (textField.value.trim() !== "") {
                textField.classList.add('taskcompleted');
                progressbar.value++;
                count++;
            } else {
                alert("Write the task first")
                this.checked = false;
            }
            
        }
        else{
            textField.classList.remove('taskcompleted');
            progressbar.value--;
            count--;
            
        }
    })
})
