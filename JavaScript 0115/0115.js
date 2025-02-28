function calcTax(kin, zei) {
    // ここに答えを書く
    ans = kin * zei;
    return ans;
}
function calc1() {
    var item = document.getElementById("shouhinTanka").value;

    // 文字列を数字に返還する
    item = item * 1;

    // calcTax()関数で消費税を計算する
    var tax = calcTax(item, 0.1);
    alert("消費税は" + tax);
}