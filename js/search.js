const data = document.getElementById('search');

function searchBar() {
    let style, pics, info, i;
    style = data.value.toLowerCase();
    pics = document.getElementsByClassName('photos');

    for (i = 0; i < pics.length; i++) {
        info = pics[i].getElementsByTagName("a")[0];
        if (info.innerHTML.toLowerCase().indexOf(style) > -1) {
            pics[i].style.display = "";
        } else {
            pics[i].style.display = "none";
        }
    }
}

data.addEventListener("keyup", searchBar);
