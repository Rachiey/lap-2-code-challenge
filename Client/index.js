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
    title: titleInput.value,
    author: authorInput.value,
    post: postSubmit.value,
  }

  //if the user doesn't write anything, don't post anything
  if(data.post === "") {
    return;
  }
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch('localhost:3000/posts/', options)
    .then(console.log("New post added"))
    .catch(err => console.warn('Oops, something went wrong.'))
  };

submitButton.addEventListener('click', e => {
  submitPost(e);
});

//current date
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").textContent = m + "/" + d + "/" + y;

// function makeDocument() {
//     let frame = document.getElementById("theFrame");
  
//     let doc = document.implementation.createHTMLDocument("New Document");
//     let p = doc.createElement("p");
//     p.textContent = "This is a new paragraph.";
  
//     try {
//       doc.body.appendChild(p);
//     } catch(e) {
//       console.log(e);
//     }
  
//     // Copy the new HTML document into the frame
  
//     let destDocument = frame.contentDocument;
//     let srcNode = doc.documentElement;
//     let newNode = destDocument.importNode(srcNode, true);
  
//     destDocument.replaceChild(newNode, destDocument.documentElement);
//   }

//add post to template.html
const addPost=document.getElementById("addPost");