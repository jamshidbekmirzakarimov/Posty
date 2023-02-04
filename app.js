const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const container = document.querySelector("#div-con");
const inputs = document.querySelectorAll(".inputs");

function htmlgaChizish() {
  let data = JSON.parse(localStorage.getItem("posts"))
  if (data)
    container.innerHTML = data.map((post, index) => {
      return `
            <div class="card" style="width: 18rem;">
              <img src="${post.imgUrl}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-title">${index + 1}</h6>
                <p class="card-text">${post.date}</p>
                <a onclick="deleteItem(${index + 1})" class="btn btn-danger">Delete</a>
              </div>
            </div>
        `
    }).join("")
}
htmlgaChizish()

function deleteItem(ind) {
  let localArr = JSON.parse(localStorage.getItem("posts"))

  localStorage.setItem("posts", JSON.stringify(localArr.filter((v, index) => index + 1 !== ind)))

  htmlgaChizish()
}


btn.addEventListener("click", () => {
  let localArr = JSON.parse(localStorage.getItem("posts"))

  if (localArr) {
    localStorage.setItem("posts", JSON.stringify([
      ...localArr,
      {
        title: inputs[1].value,
        imgUrl: inputs[0].value,
        date: inputs[2].value,
      }
    ]))
  } else {
    localStorage.setItem("posts", JSON.stringify([
      {
        title: inputs[1].value,
        imgUrl: inputs[0].value,
        date: inputs[2].value,
      }
    ]))
  }

  htmlgaChizish()
})

btn2.addEventListener("click", () => {
  localStorage.clear()
  window.location.reload()
})