var display_array = [];
function submit() {
    arrayname = [];
    for(var j = 1;j <= 4;j++){
        var name = document.getElementById("name_of_the_student_"+j).value;
        arrayname.push(name);
    }
    var length = arrayname.length;
    for(var k = 0;k < length;k++){
        display_array.push("<h4> NAME -"+arrayname[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var removecommas = display_array.join("");
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    arrayname.sort();
    var sortarray = [];
    var length = arrayname.length;
    for(var k = 0;k < length;k++){
        sortarray.push("<h4> NAME -"+arrayname[k]+"</h4>");
    }
    var removecommas = sortarray.join("");
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
}