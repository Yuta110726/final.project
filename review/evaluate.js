// 商品展示圖
const productImages = {
  shoes1: [
    "shoes/shoes1/shoes1-1.png",
    "shoes/shoes1/shoes1-2.png",
    "shoes/shoes1/shoes1-3.png",
    "shoes/shoes1/shoes1-4.png",
  ],
  shoes2: [
    "shoes/shoes2/shoes2-1.png",
    "shoes/shoes2/shoes2-2.png",
    "shoes/shoes2/shoes2-3.png",
    "shoes/shoes2/shoes2-4.png",
  ],
  shoes3: [
    "shoes/shoes3/shoes3-1.png",
    "shoes/shoes3/shoes3-2.png",
    "shoes/shoes3/shoes3-3.png",
    "shoes/shoes3/shoes3-4.png",
  ],
  shoes4: [
    "shoes/shoes4/shoes4-1.png",
    "shoes/shoes4/shoes4-2.png",
    "shoes/shoes4/shoes4-3.png",
    "shoes/shoes4/shoes4-4.png",
  ],
  shoes5: [
    "shoes/shoes5/shoes5-1.png",
    "shoes/shoes5/shoes5-2.png",
    "shoes/shoes5/shoes5-3.png",
    "shoes/shoes5/shoes5-4.png",
  ],
  shoes6: [
    "shoes/shoes6/shoes6-1.png",
    "shoes/shoes6/shoes6-2.png",
    "shoes/shoes6/shoes6-3.png",
    "shoes/shoes6/shoes6-4.png",
    
  ],
  shoes7: [
    "shoes/shoes7/shoes7-1.png",
    "shoes/shoes7/shoes7-2.png",
    "shoes/shoes7/shoes7-3.png",
    "shoes/shoes7/shoes7-4.png",
  ],
  shoes8: [
    "shoes/shoes8/shoes8-1.png",
    "shoes/shoes8/shoes8-2.png",
    "shoes/shoes8/shoes8-3.png",
    "shoes/shoes8/shoes8-4.png",
  ],
  shoes9: [
    "shoes/shoes9/shoes9-1.png",
    "shoes/shoes9/shoes9-2.png",
    "shoes/shoes9/shoes9-3.png",
    "shoes/shoes9/shoes9-4.png",
  ],
  shoes10: [
    "shoes/shoes10/shoes10-1.png",
    "shoes/shoes10/shoes10-2.png",
    "shoes/shoes10/shoes10-3.png",
    "shoes/shoes10/shoes10-4.png",
  ],
  shoes11: [
    "shoes/shoes11/shoes11-1.png",
    "shoes/shoes11/shoes11-2.png",
    "shoes/shoes11/shoes11-3.png",
    "shoes/shoes11/shoes11-4.png",
  ],
  shoes12: [
    "shoes/shoes12/shoes12-1.png",
    "shoes/shoes12/shoes12-2.png",
    "shoes/shoes12/shoes12-3.png",
    "shoes/shoes12/shoes12-4.png",
  ]
};

//商品留言
const productReviews = {
  shoes1: [
    { rating: 4, comment: "輕巧又好看，活動整天都覺得很讚。" },
    { rating: 5, comment: "穿起來超舒服，腳感一流。" },
  ],
  shoes2: [
    { rating: 5, comment: "鞋跟高度剛剛好，好看又舒服，超愛的💘" },
    { rating: 4, comment: "上課穿超適合，舒服又好看～" },
    { rating: 5, comment: "超好搭衣服的啦～真心推😊" },
  ],
  shoes3: [
    { rating: 5, comment: "跟女友一起穿帥鞋，難得有她可以跟我一起穿的。" },
    { rating: 5, comment: "好看又舒服超讚的，CP值超高。" },
  ],
  shoes4: [
    { rating: 2, comment: "覺得鞋桶有點小，腳踝久了會稍微不舒服。" },
    { rating: 4, comment: "版型有點小，可以買大一號，但是不影響它好看～🤩" },
    { rating: 5, comment: "上週去爬山，下雨完全沒濕～超讚的！" },
  ],
  shoes5: [
    { rating: 4, comment: "現在好少出復古風的鞋，好喜歡。" },
    { rating: 5, comment: "超帥，女友說很適合我，我也這麼覺得。" },
  ],
  shoes6: [
    { rating: 5, comment: "造型可愛，我家小孩超愛的！回家都不想脫下來😆" },
    { rating: 4, comment: "妹妹很喜歡，推推" },
    { rating: 4, comment: "孩子超喜歡，穿著跑跳都沒問題。" },
  ],
  shoes7: [
    { rating: 5, comment: "這雙的設計真的很讚，保護小朋友的腳，不容易運動傷害。" },
    { rating: 5, comment: "小孩說很舒服，怎麼跑都很讚。" },
    { rating: 4, comment: "我家弟弟說如果有卡通圖案會更讚😅" },
  ],
  shoes8: [
    { rating: 5, comment: "超讚的，終於找到適合我家小孩的版型。" },
  ],
  shoes9: [
    { rating: 5, comment: "防水且透氣的設計，媽媽每天都穿去逛市場。" },
    { rating: 5, comment: "不管是登山還是郊外探險，這鞋的支撐力和保護力都給力。" },
  ],
  shoes10: [
    { rating: 3, comment: "簡約設計，好搭配。" },
    { rating: 5, comment: "材質質感佳，價錢很值得。" },
  ],
  shoes11: [
    { rating: 5, comment: "鞋底很厚，逛街一整天完全都不累～" },
    { rating: 5, comment: "顏色很時尚，配什麼衣服都好看。" },
  ],
  shoes12: [
    { rating: 5, comment: "這雙鞋真的很好穿！適合登山健行，防水效果也不錯。" },
    { rating: 5, comment: "上週去爬山，下雨完全沒濕～超讚的！" },
  ],
  
};

document.addEventListener("DOMContentLoaded", function () {
  const productId = document.body.dataset.productId;
  const images = productImages[productId] || [];
  const reviews = productReviews[productId] || [];

  //圖片
  let currentImageIndex = 0;
  const productImage = document.getElementById("productImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateImage() {
    productImage.src = images[currentImageIndex];
  }

  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });

  updateImage(); 

  //評論
  const reviewsContainer = document.getElementById("reviewsContainer");
  reviewsContainer.innerHTML = ""; 

  let totalRating = 0;

  reviews.forEach(({ rating, comment }) => {
    const reviewDiv = document.createElement("div");
    reviewDiv.className = "review";

    const stars = "⭐".repeat(rating);
    reviewDiv.innerHTML = `
      <div>${stars}</div>
      <div>${comment}</div>
    `;

    reviewsContainer.appendChild(reviewDiv);
    totalRating += rating;
  });

  //平均評分
  const averageRating = document.getElementById("averageRating");
  if (reviews.length > 0) {
    const avg = (totalRating / reviews.length).toFixed(1);
    averageRating.textContent = `平均評分：${avg} 顆星`;
  } else {
    averageRating.textContent = "平均評分：尚無評價";
  }

  //新增評論
  const reviewForm = document.getElementById("reviewForm");
  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const rating = +document.querySelector("input[name='rating']:checked")?.value || 0;
    const comment = document.getElementById("comment").value.trim();

    if (rating === 0 || comment === "") return;

    const newReview = document.createElement("div");
    newReview.className = "review";
    newReview.innerHTML = `
      <div>${"⭐".repeat(rating)}</div>
      <div>${comment}</div>
    `;

    reviewsContainer.appendChild(newReview);

    //更新平均
    totalRating += rating;
    const newCount = reviews.length + 1;
    const newAvg = (totalRating / newCount).toFixed(1);
    averageRating.textContent = `目前平均評分：${newAvg} 顆星`;

    //清空表單
    reviewForm.reset();
  });
});

//加入購物車
document.getElementById('addToCartBtn').addEventListener('click', () => {
      const productName = document.querySelector('article h2').textContent;
      const productPriceText = document.querySelector('article h3').textContent;
      const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, '')); 
      const size = document.getElementById('sizeInput').value;
      const quantity = parseInt(document.getElementById('quantity').value);
      const imageSrc = productImage.src;

     
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      
      const existingIndex = cart.findIndex(item => item.name === productName && item.size === size);
      if (existingIndex !== -1) {
         cart[existingIndex].quantity += quantity;
      } else {
         cart.push({
            name: productName,
            price: productPrice,
            size: size,
            quantity: quantity,
            image: imageSrc
         });
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      alert('已成功加入購物車！');
   });