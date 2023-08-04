var selectedProduct = "";

function showPaymentOptions(productName) {
  var modal = document.getElementById("paymentModal");
  modal.style.display = "block";

  // Simpan nama produk yang dipilih
  selectedProduct = productName;
}

function hidePaymentOptions() {
  var modal = document.getElementById("paymentModal");
  modal.style.display = "none";
}

function showQRISPayment() {
  var qrisModal = document.getElementById("qrisModal");
  qrisModal.style.display = "block";
}

function hideQRISPayment() {
  var qrisModal = document.getElementById("qrisModal");
  qrisModal.style.display = "none";
}

function showDanaPayment() {
  var danaModal = document.getElementById("danaModal");
  danaModal.style.display = "block";
}

function hideDanaPayment() {
  var danaModal = document.getElementById("danaModal");
  danaModal.style.display = "none";
}

// Function to display QRIS payment modal with QR code image
function showQRISPayment() {
  var qrisModal = document.getElementById("qrisModal");
  qrisModal.style.display = "block";
}

// Function to display Dana payment modal with QR code image
function showDanaPayment() {
  var danaModal = document.getElementById("danaModal");
  danaModal.style.display = "block";
}
