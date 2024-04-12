const products = [
    {
        "id": 1,
        "name": "Dù che nắng",
        "image": "../img/vật dụng/dù che nắng.png",
        "price": "100 $" 
    },
    {
        "id": 2,
        "name": "Balo chống nước",
        "image": "../img/vật dụng/ba lô chống nước.png",
        "price": "200 $" 
    },
    {
        "id": 3,
        "name": "Kem chống nắng",
        "image": "../img/vật dụng/kem chống nắng.png",
        "price": "50 $" 
    },
    {
        "id": 4,
        "name": "Máy ảnh chống nước",
        "image": "../img/vật dụng/máy ảnh chống nước.png",
        "price": "600 $" 
    },
    {
        "id": 5,
        "name": "Bình nước giữ nhiệt",
        "image": "../img/vật dụng/bình giữ nhiệt.png",
        "price": "30 $" 
    },
    {
        "id": 6,
        "name": "Phao bơi",
        "image": "../img/vật dụng/phao bơi.png",
        "price": "100 $" 
    },
    {
        "id": 7,
        "name": "Kính râm",
        "image": "../img/vật dụng/kính râm.png",
        "price": "100 $" 
    },
    {
        "id": 8,
        "name": "Vớ bơi",
        "image": "../img/vật dụng/vớ bơi.png",
        "price": "50 $" 
    }
]

let productLis = document.querySelector(".product-list")
let sumOfProduct = ``;

let sum = 0
for (let key of products) {
  if (sum < 8) {
    sumOfProduct += `
    <div class="product" id="${key.id}">
                <div class="images"> <img src="${key.image}" alt=""></div>
                 <h3>${key.price}</h3>
                 <p>${key.name}</p>
                 <a href="chitiet.html">Xem thêm</a>
                </div>
    `;
  }
  sum++
}
console.log(sumOfProduct);

productLis.innerHTML = sumOfProduct