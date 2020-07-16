function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    if(filter=="")
    {
        location.reload();
        return;
    }
    else
    {
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
            cards[i].style.width = "300px";
            cards[i].style.padding = "10px";
        } else {
            cards[i].style.display = "none";
        }
    }
}
};
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

function formsubmit()
{
    var item = document.getElementById("moviename").value;
    var earning = document.getElementById("earning").value;
    var radio = document.getElementsByName("active");
    var select = document.getElementById("category").value;
    var date = document.getElementById("dateOfRelease").value;
    var rating = document.getElementById("check1").value;
    var count=0;
    if(item=="")
    {
        document.getElementById("movie-error").innerHTML="Movie name is required";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("moviename").focus();
        return false;
    }
    else if(item.length>200)
    {
        document.getElementById("movie-error").innerHTML="Movie name cannot exceed 200 characters.";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("moviename").focus();
        return false;
    }
    else if(earning=="")
    {
        document.getElementById("earning-error").innerHTML="Earning is required";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("earning").focus();
        return false;
    }
    else if(isNaN(earning))
    {
        document.getElementById("earning-error").innerHTML="Earning has to be a number";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("earning").focus();
        return false;
    }
    else if(date=="")
    {
        document.getElementById("date-error").innerHTML="Choose a date";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("dateOfRelease").focus();
        return false;
    }
    else if(select=="")
    {
        document.getElementById("select-error").innerHTML="Select one category";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("rating-error").innerHTML = "";
        document.getElementById("category").focus();
        return false;
    }
    else
    {
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].checked)
        {
            count++;
        }
    }
    if(count==0)
    {
        document.getElementById("radio-error").innerHTML="Yes or no?";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("rating-error").innerHTML = "";
        return false;
    }
    else if(rating<1 || rating>10)
    {
        document.getElementById("rating-error").innerHTML = "Rating should be between 1 and 10";
        document.getElementById("earning-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("movie-error").innerHTML = "";
        document.getElementById("check1").focus();
        return false;
    }
    else
    {
        return true;
    }
}
}

function favourite(id)
{
    if(document.getElementById(id).style.color === "rgb(192, 59, 59)")
    {
    
    document.getElementById(id).style.color = "rgb(196, 187, 187)";
    document.getElementById("favourite1").innerHTML = "";
    document.getElementById("favourite2").innerHTML = "Removed from favourites!";
    
    return false;
    }
    else
    {
        document.getElementById(id).style.color = "rgb(192, 59, 59)";
        document.getElementById("favourite2").innerHTML = "";
        document.getElementById("favourite1").innerHTML = "Added to favourites!";
        return false;
    }
}
function list()
{
    document.getElementById("inactive").style.display = "none";
    return false;
}