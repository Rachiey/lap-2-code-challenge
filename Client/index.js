var T = { "apiUrl": "https:\/\/edit.telegra.ph", "datetime": 0, "pageId": 0 };
(function () {
    var b = document.querySelector('time');
    if (b && T.datetime) {
        var a = new Date(1E3 * T.datetime), d = 'January February March April May June July August September October November December'.split(' ')[a.getMonth()], c = a.getDate();
        b.innerText = d + ' ' + (10 > c ? '0' : '') + c + ', ' + a.getFullYear()
    }
})();

//submit post
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const postSubmit = document.getElementById('posts');
const submitButton = document.getElementById('submit');

function submitPost(e) {
  const data = {
    title: titleInput.innerText,
    author: authorInput.innerText,
    body: postSubmit.innerText,
  }
  console.log(data);
  //if the user doesn't write anything, don't post anything
  if(!data.title || !data.author || !data.body) {
    alert("Please fill in all fields!")
    return;
  }
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch('http://localhost:3000/posts/', options)
    .then(resp => resp.json())
    .then(data => redirectToPost(data))
    .catch(err => console.warn(`Oops, something went wrong. ${err}`))
  };

submitButton.addEventListener('click', e => {
  e.preventDefault();
  submitPost(e);
});

function redirectToPost(data){
  const id = data.id;
  window.location.href = `./post?id=${id}`;
}

//current date
// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").textContent = m + "/" + d + "/" + y;

// submitButton.id="submit";

// const checkIds=[];
// const selectPostID=[];

// document.addEventListener('DOMContentLoaded', (e) => {
//     e.preventDefault();

//     fetch(`localhost:3000/posts`)
//     .then(obj => obj.json())
//     .then(data => setValues(data.all))

//     function setValues(data){
//         for (let i = data.length - 1; i >= 0; i--) {
//             const art=document.getElementById('addPosts');
//             const sector=document.createElement('section');
//             const newH1=document.createElement('h1');
//             const newAddress=document.createElement('address');
//             const newP=document.createElement('p');
//             newH1.textContent=data[i].title;
//             newAddress.textContent=data[i].author;
//             newP.textContent=data[i].posts;


//             if(data[i].post.length <= 220 ){
//                 newMsg.textContent=data[i].post;
//             }else{
//                 newMsg.textContent=data[i].post.substring(0,220);
//             }
            
//             newP.className="gifs";
//             newH1.className="titles";
//             newAddress.className="locs";
//             sector.className="selection";
//             newMsg.className="p";

//             sector.id=data[i].id;
//             checkIds.push(data[i].id); 

//             newHeader.append(newAddress);
//             newHeader.append(newH1);
//             sector.append(newP);
//             art.append(sector);   
//         }
//         setID(checkIds)
//     }


//     function setID(checkIds){
//         for (let i =0 ; checkIds.length > i;  i++) {
//             const getIdNum=document.getElementById(checkIds[i]);
//             getIdNum.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 classOverview.className="hideClass";
//                 getPostById(checkIds[i],selectPostID[i]);
//         })
//         }

//     }

    
// });