window.onload = on_page_load;

function on_page_load()
{
    var params = new URL(document.location).searchParams;
    var page = params.get('page');
    var div = document.getElementById(page);
    if (!div)
        div = document.getElementById('home');
    div.style.display = 'block';

    var a = document.getElementById(`nav-${page}`);
    if (!a)
        a = document.getElementById('nav-home');
    console.log(a);
    console.log(div);
    a.classList.add('active-tab');
}

