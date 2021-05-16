var name1=[];

function submit()
{
    var GuestName=document.getElementById("sub_input").value;
    name1.push(GuestName);

    for (var n=1; n<1; n++)
    {
        var name_of_people=document.getElementById("sub_input_"+n);
        console.log(name_of_people);
        name1.push(name_of_people);
    }

    console.log(GuestName);
    console.log(name1);
    document.getElementById("sub_div").innerHTML=name1.toString();
}

function show()
{
    var i=name1.join("<br>");
    console.log(name1);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}

function sorting()
{
    name1.sort();
    var i=name1.join("<br>");
    console.log(name1);
    document.getElementById("sort_button").innerHTML=i.toString();

}

function searching()
{
    var s=document.getElementById("search_input").value;
    var found=0;
    var j;
    for(j=0;j<name1.length;j++)
    {
        if(s==name1[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="found name "+found+" time/s";
    console.log("found name "+found+" time/s");
}
