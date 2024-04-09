async function get_data() {
  let res = await fetch("https://randomuser.me/api");
  let res1 = await res.json();
  let container = document.createElement("div");
  container.className = "container";
  let row = document.createElement("div");
  row.className = "row";
  let col = document.createElement("div");
  col.className = "col-md-12";
  col.innerHTML = `<div class="card w-100 mt-5 card-design" style="width: 18rem;">
  <img src="${res1.results[0].picture.thumbnail}" class="card-img-top thumb" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name : 
    <span>${res1.results[0].name.first}</span>
    <span>${res1.results[0].name.last}</span>
    </h5>
    <p class="card-text">Gender : ${res1.results[0].gender}</a>
    <p class="card-text">Email : ${res1.results[0].email}</a>
    <p class="card-text">Phone : ${res1.results[0].cell}</a>
  </div>
  <a href="#" class="btn btn-primary button" onClick="window.location.reload(true)">Get Data</a>
</div>`;
  row.append(col);
  container.append(row);
  document.body.append(container);
}
get_data();
