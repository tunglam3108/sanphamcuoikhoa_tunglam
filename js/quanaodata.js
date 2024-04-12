const products = [
    {
        "id": 1,
        "name": "Bikini",
        "image": "../",
        "price": "100 $" 
    },
    {
        "id": 2,
        "name": "Áo tắm một mảnh",
        "image": "link_hinh_anh_2.jpg",
        "price": "200 $"
    },
    {
        "id": 3,
        "name": "Quần bơi",
        "image": "link_hinh_anh_3.jpg",
        "price": "150 $"
    },
    {
        "id": 4,
        "name": "Áo khoác bơi",
        "image": "link_hinh_anh_4.jpg",
        "price": "300 $"
    },
    {
        "id": 5,
        "name": "Váy bơi",
        "image": "link_hinh_anh_5.jpg",
        "price": "300 $"
    },
    {
        "id": 6,
        "name": "Quần shorts",
        "image": "link_hinh_anh_6.jpg",
        "price": "50 $"
    },
    {
        "id": 7,
        "name": "Áo thun",
        "image": "link_hinh_anh_7.jpg",
        "price": "200 $"
    },
    {
        "id": 8,
        "name": "Váy maxi",
        "image": "link_hinh_anh_8.jpg",
        "price": "500 $"
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