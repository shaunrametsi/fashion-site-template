var menFashionImages = [
    
    "../Images/men-fashion/pexels-men-(1).JPEG",
    "../Images/men-fashion/pexels-men-(2).JPEG",
    "../Images/men-fashion/pexels-men-(3).JPEG",
    "../Images/men-fashion/pexels-men-(4).JPEG",
    "../Images/men-fashion/pexels-men-(5).JPEG",
    "../Images/men-fashion/pexels-men-(6).JPEG",
    "../Images/men-fashion/pexels-men-(7).JPEG",
    "../Images/men-fashion/pexels-men-(8).JPEG",
    "../Images/men-fashion/pexels-men-(9).JPEG",
    "../Images/men-fashion/pexels-men-(10).JPEG",
    "../Images/men-fashion/pexels-men-(11).JPEG",
    "../Images/men-fashion/pexels-men-(12).JPEG",
    "../Images/men-fashion/pexels-men-(13).JPEG",
    "../Images/men-fashion/IMG_6459.JPG",
    "../Images/men-fashion/IMG_6460.JPG",
    "../Images/men-fashion/IMG_6461.JPG",
    "../Images/men-fashion/IMG_6462.JPG",
    "../Images/men-fashion/IMG_6463.JPG",
    "../Images/men-fashion/IMG_6464.JPG",
    "../Images/men-fashion/IMG_6466.JPG",
    "../Images/men-fashion/IMG_6468.JPG",
    "../Images/men-fashion/IMG_6469.JPG",
    "../Images/men-fashion/IMG_6470.JPG",
    "../Images/men-fashion/IMG_6471.JPG",
    "../Images/men-fashion/IMG_6472.JPG"
];

var womanFashionImages = [
    "../Images/woman-fashion/pexels-woman(1).JPEG",
    "../Images/woman-fashion/pexels-woman(2).JPEG",
    "../Images/woman-fashion/pexels-woman(3).JPEG",
    "../Images/woman-fashion/pexels-woman(4).JPEG",
    "../Images/woman-fashion/pexels-woman(5).JPEG",
    "../Images/woman-fashion/pexels-woman(6).JPEG",

    "../Images/woman-fashion/pexels-woman(1).JPG",
    "../Images/woman-fashion/pexels-woman(2).JPG",
    "../Images/woman-fashion/pexels-woman(3).JPG",
    "../Images/woman-fashion/pexels-woman(4).JPG",
    "../Images/woman-fashion/pexels-woman(5).JPG",
    "../Images/woman-fashion/pexels-woman(6).JPG",

    "../Images/woman-fashion/pexels-woman(6).JPG",
    "../Images/woman-fashion/pexels-woman(7).JPG",
    "../Images/woman-fashion/pexels-woman(8).JPG",
    "../Images/woman-fashion/pexels-woman(9).JPG",
    "../Images/woman-fashion/pexels-woman(10).JPG",
    "../Images/woman-fashion/pexels-woman(11).JPG"
];


function getMenFashion()
{
    const imageContainer = document.getElementById('imagesContainer');
    let count = 1;
    
    menFashionImages.forEach(element => {
        //images
        var childImage = document.createElement("img");
        childImage.setAttribute("src", element);
        childImage.setAttribute("class", "gridImage");
        childImage.setAttribute("onclick", "showModal(this.src)");
        childImage.setAttribute("style", "-webkit-animation-duration: " + ((Math.random() * 2000) + 200) + "ms; -webkit-animation-name: slidein");
        document.getElementById('container' + count.toString()).appendChild(childImage);
        let index = count + 1;
        count = index < 4 ? count + 1 : 1;  
    });

}

function getWomanFashion()
{
    const imageContainer = document.getElementById('imagesContainer');
    let count = 1;
    
    womanFashionImages.forEach(element => {
        //images
        var childImage = document.createElement("img");
        childImage.setAttribute("src", element);
        childImage.setAttribute("class", "gridImage");
        childImage.setAttribute("onclick", "showModal(this.src)");
        childImage.setAttribute("style", "-webkit-animation-duration: " + ((Math.random() * 2000) + 200) + "ms; -webkit-animation-name: slidein");
        document.getElementById('container' + count.toString()).appendChild(childImage);
        let index = count + 1;
        count = index < 4 ? count + 1 : 1;  
    });

}

var modal = document.getElementById('myModal');

function showModal(_src){
    modal.style.display = "block";
    var cardImage = document.getElementById("card-image");
    cardImage.setAttribute("src", _src);
}
