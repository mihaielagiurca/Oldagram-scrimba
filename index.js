let likesButton = 0
const oldagram = [{
     image:"images/Vincent-van-Gogh.png",
     name:"Vincent van Gogh",
     username: "vincey1853",
     city: "Zudern, Nederland",
     image2:"images/post-image.png",
     likes: 21211,
     comments: "just took a few mushrooms lol"
    },
    {image:"images/Gustave Courbet.png",
     name:"Gustave Courbet", 
     username:"gus1819",
     city: "Zudern, Nederland",
     image2:"images/post-image(3).png",
     likes: 10000,
     comments: "i'm feelin a bit stressed tbh"
    },
    {image:"images/Joseph Ducreux.png",
     name:"Josept Ducreux",
     username: "jd1735",
     city: "Zudern, Nederland",
     image2:"images/post-image (1).png",
     likes: 20000,
     comments: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"
    }
]
let mainEl = document.getElementById("main-el");



function generatePost(){
    let postList ="";
    for(let i=0; i< oldagram.length; i++){
    postList += 
    `<section class="post">
        <div class="section-first">
            <img id="img-el" src="${oldagram[i].image}" alt="post-content-1-icon">
            <div>
                <p id="name-el" class="name">${oldagram[i].name}</p>
                <p id="city-el" class="city">${oldagram[i].city}</p>
            </div>
        </div>
        <div class="section-mid">
            <img id="postImage-el" src="${oldagram[i].image2}" alt="post-image">
        </div>
        <div class="section-icons"> 
            <button id="likes-el"><img src="images/like.png" alt="icon-like"></button>
            <button><img src="images/Ellipse_1.png" alt="icon-comment"></button>
            <button><img src="images/share.png" alt="icon-share"></button>
        </div>
        <div class="section-last">
            <p id="count-likes" class="likes">${oldagram[i].likes} likes</p>
            <p id="comments-el" class="comments"><span>${oldagram[i].username}</span>
            ${oldagram[i].comments}</p>
        </div>
    </section>`;
    }
mainEl.innerHTML = postList;
}
generatePost();



    
let likesElement = document.getElementById("likes-el");
let countLikes = document.getElementById("count-likes")
  

    likesElement.addEventListener("click", function() {
        countLikes.textContent = `${oldagram[0].likes +=1} likes`;
        
    })
  

