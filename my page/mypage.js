document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

  const userInfo = document.getElementById('userInfo');
  const historyList = document.getElementById('historyList');

 
  if (user) {
    userInfo.innerHTML = `
      <div class="container mt-4">
        <h2 class="mb-3">會員資料</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>姓名：</strong> ${user.name}</li>
          <li class="list-group-item"><strong>性別：</strong> ${user.gender}</li>
          <li class="list-group-item"><strong>鞋子尺寸：</strong> ${user.size} cm</li>
          <li class="list-group-item"><strong>電子郵件：</strong> ${user.email}</li>
          <li class="list-group-item"><strong>地址：</strong> ${user.address}</li>
          <li class="list-group-item"><strong>電話：</strong> ${user.phone}</li>
        </ul>
      </div>
    `;
  } else {
    userInfo.innerHTML = `
      <div class="alert alert-warning mt-4" role="alert">
        尚未登入或找不到會員資訊。請先登入。
      </div>
    `;
  }

  if (history.length === 0) {
    historyList.innerHTML = `
      <li class="list-group-item text-muted">尚無購買紀錄。</li>
    `;
  } else {
    history.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex align-items-center';
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="me-3" style="width:60px;height:60px;object-fit:cover;">
        <div>
          <p class="mb-1"><strong>${item.name}</strong></p>
          <p class="mb-0">數量：${item.quantity}｜時間：${item.date}</p>
        </div>
      `;
      historyList.appendChild(li);
    });
  }
});

function logout() {
  localStorage.removeItem('user');
  alert('您已成功登出');
  window.location.href = '../login/login.html';  
}
