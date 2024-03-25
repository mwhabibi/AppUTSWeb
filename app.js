document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const customAlert = document.getElementById('customAlert');
  const closeButton = document.querySelector('.close-button');
  const redirectButton = document.getElementById('redirectButton');

// login:

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = loginForm.email.value;
      const password = loginForm.password.value;

      if (email === 'mwhabibi@gmail.com' && password === '233307083') {
          customAlert.style.display = 'block';
      } else {
          errorMessage.textContent = 'Email atau password salah! Coba lagi!';
          errorMessage.classList.add('show');
      }
  });

  closeButton.addEventListener('click', function () {
      customAlert.style.display = 'none';
  });

  redirectButton.addEventListener('click', function () {
      window.location.href = 'order.html';
  });
});

// order:

const increaseButtons = document.querySelectorAll('.increase');
const decreaseButtons = document.querySelectorAll('.decrease');
const totalElement = document.getElementById('total');
let total = 0;
const itemCounts = document.querySelectorAll('.quantity span');

itemCounts.forEach(span => {
    span.textContent = '0';
});

function increaseQuantity(price, span) {
    total += price;
    span.textContent = parseInt(span.textContent) + 1;
    updateTotal();
}

    function decreaseQuantity(price, span) {
        if (parseInt(span.textContent) > 0) {
            total -= price;
            span.textContent = parseInt(span.textContent) - 1;
            updateTotal();
        }
    }

function updateTotal() {
    totalElement.textContent = 'Rp. ' + total.toLocaleString('id-ID');
}

document.addEventListener('DOMContentLoaded', function () {
    const payNowButton = document.getElementById('payNowButton');
    const totalPaymentElement = document.getElementById('total');

    payNowButton.addEventListener('click', function () {
        const totalPayment = totalPaymentElement.textContent.trim();
        alert('Total yang perlu dibayar: ' + totalPayment);
        window.location.reload();
    });
});

increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const price = parseInt(button.parentElement.previousElementSibling.textContent.replace(/[^\d]/g, ''));
        const span = itemCounts[index];
        increaseQuantity(price, span);
    });
});

decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const price = parseInt(button.parentElement.previousElementSibling.textContent.replace(/[^\d]/g, ''));
        const span = itemCounts[index];
        decreaseQuantity(price, span);
    });
});