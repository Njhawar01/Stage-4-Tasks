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
    var item = document.getElementById("itemname").value;
    var price = document.getElementById("price").value;
    var radio = document.getElementsByName("active");
    var select = document.getElementById("category").value;
    var date = document.getElementById("dateOfLaunch").value;
    var count=0;
    if(item=="")
    {
        document.getElementById("item-error").innerHTML="Item name is required";
        document.getElementById("price-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("itemname").focus();
        return false;
    }
    else if(item.length>200)
    {
        document.getElementById("item-error").innerHTML="Item name cannot exceed 200 characters.";
        document.getElementById("price-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("itemname").focus();
        return false;
    }
    else if(price=="")
    {
        document.getElementById("price-error").innerHTML="Price is required";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("item-error").innerHTML = "";
        document.getElementById("price").focus();
        return false;
    }
    else if(isNaN(price))
    {
        document.getElementById("price-error").innerHTML="Price has to be a number";
        document.getElementById("item-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("price").focus();
        return false;
    }
    else if(date=="")
    {
        document.getElementById("date-error").innerHTML="Choose a date";
        document.getElementById("item-error").innerHTML = "";
        document.getElementById("price-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("dateOfLaunch").focus();
        return false;
    }
    else if(select=="")
    {
        document.getElementById("select-error").innerHTML="Select one category";
        document.getElementById("item-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        document.getElementById("price-error").innerHTML = "";
        document.getElementById("radio-error").innerHTML="";
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
        document.getElementById("item-error").innerHTML = "";
        document.getElementById("select-error").innerHTML = "";
        document.getElementById("price-error").innerHTML = "";
        document.getElementById("date-error").innerHTML = "";
        return false;
    }
    else
    {
        return true;
    }
}
}