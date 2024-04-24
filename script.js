let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numberOfImage = document.getElementById("number-of-img");

// entradas de la segunda imagen
let fileInput2 = document.getElementById("file-input2");
let imageContainer2 = document.getElementById("images2");
let numberOfImage2 = document.getElementById("number-of-img2");

// entradas de la tercer imagen
let fileInput3 = document.getElementById("file-input3");
let imageContainer3 = document.getElementById("images3");
let numberOfImage3 = document.getElementById("number-of-img3");


//funcion para imagen 1
function preview(){
    imageContainer.innerHTML = "";
    numberOfImage.textContent = `${fileInput.isDefaultNamespace.length} Files Selected`;
    numberOfImage.style.color = "black";

    for(i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figCaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }
}


//funcion para imagen 2
function preview2(){
    imageContainer2.innerHTML = "";
    numberOfImage2.textContent = `${fileInput2.isDefaultNamespace.length} Files Selected`;
    numberOfImage2.style.color = "black";

    for(i of fileInput2.files){
        let reader2 = new FileReader();
        let figure2 = document.createElement("figure");
        let figCap2 = document.createElement("figCaption");
        figCap2.innerText = i.name;
        figure2.appendChild(figCap2);
        reader2.onload=()=>{
            let img2 = document.createElement("img");
            img2.setAttribute("src", reader2.result);
            figure2.insertBefore(img2, figCap2);
        }
        imageContainer2.appendChild(figure2);
        reader2.readAsDataURL(i);
    }
}


//funcion para imagen 3
function preview3(){
    imageContainer3.innerHTML = "";
    numberOfImage3.textContent = `${fileInput3.isDefaultNamespace.length} Files Selected`;
    numberOfImage3.style.color = "black";

    for(i of fileInput3.files){
        let reader3 = new FileReader();
        let figure3 = document.createElement("figure");
        let figCap3 = document.createElement("figCaption");
        figCap3.innerText = i.name;
        figure3.appendChild(figCap3);
        reader3.onload=()=>{
            let img3 = document.createElement("img");
            img3.setAttribute("src", reader3.result);
            figure3.insertBefore(img3, figCap3);
        }
        imageContainer3.appendChild(figure3);
        reader3.readAsDataURL(i);
    }
}