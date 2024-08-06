document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const currentPrice = parseFloat(document.getElementById('currentPrice').value);
    const growthRate = parseFloat(document.getElementById('growthRate').value) / 100;
    const years = 20;

    const futurePrice = currentPrice * Math.pow((1 + growthRate), years);

    document.getElementById('result').innerText = `Projected Apple Stock Price in 20 Years: $${futurePrice.toFixed(2)}`;
});
