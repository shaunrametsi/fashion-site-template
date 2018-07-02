var menFashionImages = [
    
    "../Images/men-fashion/pexels-men-(1).JPG",
    "../Images/men-fashion/pexels-men-(2).jpeg",
    "../Images/men-fashion/pexels-men-(3).jpeg",
    "../Images/men-fashion/pexels-men-(4).jpeg",
    "../Images/men-fashion/pexels-men-(5).jpeg",
    "../Images/men-fashion/pexels-men-(6).jpeg",
    "../Images/men-fashion/pexels-men-(7).jpeg",
    "../Images/men-fashion/pexels-men-(8).jpeg",
    "../Images/men-fashion/pexels-men-(9).jpeg",
    "../Images/men-fashion/pexels-men-(10).jpeg",
    "../Images/men-fashion/pexels-men-(11).jpeg",
    "../Images/men-fashion/pexels-men-(12).jpeg",
    "../Images/men-fashion/pexels-men-(13).jpeg",
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
    "../Images/woman-fashion/pexels-woman(1).jpeg",
    "../Images/woman-fashion/pexels-woman(2).jpeg",
    "../Images/woman-fashion/pexels-woman(3).jpeg",
    "../Images/woman-fashion/pexels-woman(4).jpeg",
    "../Images/woman-fashion/pexels-woman(5).jpeg",
    "../Images/woman-fashion/pexels-woman(6).jpeg",

    "../Images/woman-fashion/pexels-woman(1).jpg",
    "../Images/woman-fashion/pexels-woman(2).jpg",
    "../Images/woman-fashion/pexels-woman(3).jpg",
    "../Images/woman-fashion/pexels-woman(4).jpg",
    "../Images/woman-fashion/pexels-woman(5).jpg",
    "../Images/woman-fashion/pexels-woman(6).jpg",

    "../Images/woman-fashion/pexels-woman(6).jpg",
    "../Images/woman-fashion/pexels-woman(7).jpg",
    "../Images/woman-fashion/pexels-woman(8).jpg",
    "../Images/woman-fashion/pexels-woman(9).jpg",
    "../Images/woman-fashion/pexels-woman(10).jpg",
    "../Images/woman-fashion/pexels-woman(11).jpg"
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
