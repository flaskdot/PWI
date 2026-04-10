function calculatePWI() {
    const rainfall = document.getElementById('rainfall').value;
    const resultDiv = document.getElementById('result');

    if (rainfall === "") {
        resultDiv.innerHTML = "يرجى إدخال قيمة صحيحة";
        return;
    }

    // مثال على معادلة منطقية للمؤشر
    let status = "";
    if (rainfall < 50) {
        status = "جاف جداً";
    } else if (rainfall >= 50 && rainfall < 150) {
        status = "معتدل";
    } else {
        status = "رطب / غزير";
    }

    resultDiv.innerHTML = `النتيجة: ${status}`;
    resultDiv.style.color = (status === "جاف جداً") ? "red" : "green";
}
