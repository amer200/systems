const productNumber = document.getElementById('product-number');
const embsNumber = document.getElementById('embs-number');
const price = document.getElementById('price');


productNumber.addEventListener('change', () => {
    const totalPrice = (embsNumber.value * 50) + (productNumber.value * 200);
    price.textContent = `سعر الاشتراك = ${totalPrice} / شهر`;
})
embsNumber.addEventListener('change', () => {
    const totalPrice = (embsNumber.value * 50) + (productNumber.value * 200);
    price.textContent = `سعر الاشتراك = ${totalPrice} / شهر`;
})