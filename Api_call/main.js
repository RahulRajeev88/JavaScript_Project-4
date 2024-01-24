const postListsContainer = document.querySelector(".post-lists-container");

// Fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("Some error ocurred");
    }
  };
}

// Fetch using Fetch method

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

// Fetch using Async/Await method
async function fetchUsingAsyncAwaitMethod() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });

      const result = await response.json();
      displayResults(result)

}

// Fetch using XHR Async/Await method

function helperMethod(method,url) {
    const promise = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url)
        xhr.responseType = 'json'
        xhr.send()

        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.response)

            } else {
                reject(xhr.response)
            }
        }
    })
    return promise;
}



async function fetchXHRUsingAsyncAwaitMethod() {
  const response = await helperMethod('GET',"https://jsonplaceholder.typicode.com/posts");
  displayResults(response)
}






function displayResults(posts) {
  postListsContainer.innerHTML = posts
    .map(
      (postItem) => `
    <div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>

    </div>
    `
    )
    .join(" ");
}


//fetchUsingXHR();
//fetchUsingFetchMethod();

//fetchUsingAsyncAwaitMethod();

fetchXHRUsingAsyncAwaitMethod();