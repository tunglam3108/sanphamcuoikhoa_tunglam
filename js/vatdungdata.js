const products = [
    {
        "id": 1,
        "name": "Dù che nắng",
        "image": "link_hinh_anh_1.jpg",
        "price": "100 $" 
    },
    {
        "id": 2,
        "name": "Balo chống nước",
        "image": "link_hinh_anh_2.jpg",
        "price": "200 $" 
    },
    {
        "id": 3,
        "name": "Nón bảo hiểm nước",
        "image": "link_hinh_anh_3.jpg",
        "price": "50 $" 
    },
    {
        "id": 4,
        "name": "Máy ảnh chống nước",
        "image": "link_hinh_anh_4.jpg",
        "price": "600 $" 
    },
    {
        "id": 5,
        "name": "Bình nước giữ nhiệt",
        "image": "link_hinh_anh_5.jpg",
        "price": "30 $" 
    },
    {
        "id": 6,
        "name": "Gối hơi bơi",
        "image": "link_hinh_anh_6.jpg",
        "price": "100 $" 
    },
    {
        "id": 7,
        "name": "Kính mát",
        "image": "link_hinh_anh_7.jpg",
        "price": "100 $" 
    },
    {
        "id": 8,
        "name": "Vớ bơi",
        "image": "link_hinh_anh_8.jpg",
        "price": "50 $" 
    }
]

let productLis = document.querySelector(".product-list")
let sumOfProduct = ``;

let sum = 0
for (let key of products) {
  if (sum < 8) {
    sumOfProduct += `
    <div class="product">
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