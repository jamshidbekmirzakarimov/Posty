const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
const container = document.querySelector("#div-con");
const imgFile = document.getElementById("file");
const date = document.getElementById("date");

function render() {
  let datas = JSON.parse(localStorage.getItem("posts"));
  if (datas)
    container.innerHTML = datas
      ?.map(
        (post, index) =>
          `
            <div onclick="details(${post})" class="group relative">
              <div
                class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
              >
                <img
                  src="${post.image}"
                  alt="${post.title}"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      ${post.title[0].toUpperCase() + post.title.slice(1)}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Post: ${index + 1}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">${post.date}</p>
              </div>
            </div>
      `).join("");
}
render();

btn.addEventListener("click", () => {
  const arr = JSON.parse(localStorage.getItem("posts"));

  if (arr) {
    localStorage.setItem("posts", JSON.stringify([
      ...arr,
      { title: title.value, image: imgFile.value, date: date.value },
    ]))
  } else {
    localStorage.setItem("posts", JSON.stringify([
      { title: title.value, image: imgFile.value, date: date.value },
    ]))
  }
  render();
});
