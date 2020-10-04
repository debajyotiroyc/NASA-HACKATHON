function submitform(e) {
    e.preventDefault();

    var name1 = document.getElementById("user_name").value; //getting the user name

    sessionStorage.setItem("name", name1); //store player name

    location.href = "ques.html" //including ques.html

}