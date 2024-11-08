document.getElementById("second-arrow").addEventListener('click', moveforward);
document.getElementById("first-arrow").addEventListener('click', movebackward);

function moveforward(){
    document.getElementById("first-arrow").classList="arrow-button arrow-active";
    document.getElementById("second-arrow").classList="arrow-button arrow-block";
    document.getElementById('gallery').classList = "flex gallery-2";
    document.getElementById('counter').innerText = "6 / 6";
}
function movebackward(){
    document.getElementById("second-arrow").classList="arrow-button arrow-active";
    document.getElementById("first-arrow").classList="arrow-button arrow-block";
    document.getElementById('gallery').classList = "flex gallery";
    document.getElementById('counter').innerText = "3 / 6";
}