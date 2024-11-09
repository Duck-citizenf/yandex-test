document.getElementById("second-arrow").addEventListener('click', moveforward);
document.getElementById("first-arrow").addEventListener('click', movebackward);

function moveforward(){
    document.getElementById("first-arrow").classList="arrow-button";
    document.getElementById("second-arrow").classList="arrow-button arrow-block";
    document.getElementById('gallery').classList = "flex gallery2";
    document.getElementById('counter').innerText = "6 / 6";
}
function movebackward(){
    document.getElementById("second-arrow").classList="arrow-button";
    document.getElementById("first-arrow").classList="arrow-button arrow-block";
    document.getElementById('gallery').classList = "flex gallery1";
    document.getElementById('counter').innerText = "3 / 6";
}

document.getElementById("dot-second-arrow").addEventListener('click', moveforwarddot);
document.getElementById("dot-first-arrow").addEventListener('click', movebackwarddot);

let page_count = 1;

function moveforwarddot(){
    cleandot();
    if (page_count != 5){
        page_count++;
        dotcommon()
    }
    if (page_count == 5){
        document.getElementById("dot-second-arrow").classList="arrow-button arrow-block";
    }
    document.getElementById("dot-first-arrow").classList="arrow-button";
}
function movebackwarddot(){
    cleandot();
    if (page_count != 1){
        page_count = page_count-1;
        dotcommon()
    }
    if (page_count == 1){
        document.getElementById("dot-first-arrow").classList="arrow-button arrow-block";
    }
    document.getElementById("dot-second-arrow").classList="arrow-button";
}
function cleandot(){
    document.getElementById("dot1").classList = "pages-dots";
    document.getElementById("dot2").classList = "pages-dots";
    document.getElementById("dot3").classList = "pages-dots";
    document.getElementById("dot4").classList = "pages-dots";
    document.getElementById("dot5").classList = "pages-dots";
}
function dotcommon(){
    let gallery_style = "grid-cards dot-gallery"+page_count;
    let dot_high = "dot"+page_count;
    document.getElementById("dot-gallery").classList = gallery_style;
    document.getElementById(dot_high).classList = "pages-dots dot-active";
}

document.getElementById("second-arrow-small").addEventListener('click', moveforwardsmall);
document.getElementById("first-arrow-small").addEventListener('click', movebackwardsmall);

let small_counter = 1;

function moveforwardsmall(){
    if (small_counter != 6){
        small_counter++;
        smallcommon()
    }
    if (small_counter == 6){
        document.getElementById("second-arrow-small").classList="arrow-button arrow-block";
    }
    document.getElementById("first-arrow-small").classList="arrow-button";
    
}
function movebackwardsmall(){
    if (small_counter != 1){
        small_counter = small_counter-1;
        smallcommon()
    }
    if (small_counter == 1){
        document.getElementById("first-arrow-small").classList="arrow-button arrow-block";
    }
    document.getElementById("second-arrow-small").classList="arrow-button";
}
function smallcommon(){
    let gallery_small = "flex gallery" + small_counter;
    document.getElementById('gallery').classList = gallery_small;
    let counter_small = small_counter + " / 6"
    document.getElementById('counter-small').innerText = counter_small;
}