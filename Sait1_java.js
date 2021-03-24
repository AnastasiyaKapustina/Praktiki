document.querySelectorAll(".button")[0].onclick = function() 
{var i = document.querySelector(".color").value;
document.querySelectorAll(".spisok2")[i-1].style.color = "red";};

document.querySelectorAll(".button")[1].onclick = function() 
{var i = document.querySelector(".color").value;
document.querySelectorAll(".spisok2")[i-1].style.color = "green";};

document.querySelectorAll(".button")[2].onclick = function() 
{var i = document.querySelector(".color").value;
document.querySelectorAll(".spisok2")[i-1].style.color = "blue";};