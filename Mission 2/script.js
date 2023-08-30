// currentValue = 0;
// id = 0;
// temp_id = 0;

var item = [
    {nama : "Barang A", harga : 30000, image: "img/finances.png"},
    {nama : "Barang B", harga : 20000, image: "img/brocolli.png"},
];

var cart = [];

function tambahCart(nama, harga, inputId, image) {
    var jumlah = parseInt(document.getElementById(inputId).value);
    
    var existingItem = cart.find(item => item.nama === nama);
    if (existingItem) {
        existingItem.jumlah += jumlah;
    } else {
        cart.push({ nama: nama, harga: harga, jumlah: jumlah, image: image });
    }

    perbaruiTampilanKeranjang();
}

function perbaruiTampilanKeranjang() {
    var cartContainer = document.getElementById("myCart");
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        var totalHarga = item.harga * item.jumlah;
        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="" width="20px" width="30px">
            <div class="row-cart-desc">
                <p>${item.nama}</p>
                <p>Harga per item: Rp. ${item.harga}</p>
                <p>Total item : ${item.jumlah} </p>
                <p>Total harga :Rp. ${totalHarga} </p>
            </div>   
        `;
        cartContainer.appendChild(cartItem);
    });

}

function ubahJumlah(nama, inputId, perubahan) {
    var inputElement = document.getElementById(inputId);
    console.log(inputElement);
    var jumlahBaru = parseInt(inputElement.value) + perubahan;
    
    if (jumlahBaru >= 0) {
        inputElement.value = jumlahBaru;
        var itemIndex = cart.findIndex(item => item.nama === nama);
        if (itemIndex !== -1) {
            cart[itemIndex].jumlah = jumlahBaru;
            perbaruiTampilanKeranjang();
        }
    }
}

// function tambahItem(id) {
//     let numberInput = document.getElementById("numberInput-" + id);
//     let plusButton = document.getElementById("plusButton-" + id);
    
//     current_id = id;

//     cart.push({ namaBarang: , jumlahBarang: })

//     if (temp_id == id || temp_id == 0) {
//         plusButton = currentValue + 1;
//         currentValue = plusButton;
//         console.log(currentValue);
//         numberInput.value = currentValue;
//         temp_id = current_id;
//     } else {

//     }
    

    // minusButton.addEventListener("click", () => {
    //     let currentValue = parseInt(numberInput.value);
    //     if (currentValue > 0) {
    //         numberInput.value = currentValue - 1;
    //     }
    // });

    // plusButton.addEventListener("click", () => {
    //     let currentValue = parseInt(numberInput.value);
    //     numberInput.value = currentValue + 1;
    // });
//}

function kurangItem(id) {
    let minusButton = document.getElementById("minusButton-" + id);
    let numberInput = document.getElementById("numberInput-" + id);

    minusButton = currentValue - 1;
    currentValue = minusButton;
    console.log(currentValue);
    numberInput.value = currentValue;
}


// function tambahCart(id) {
//     console.log(id);
//     var divUtama = document.createElement("div");
//     divUtama.className = "row-cart";

//     var divGambar = document.createElement("div");
//     divGambar.className = "cart-image";
//     var img = document.createElement("img");
//     img.src = "img/finance.png";
//     img.alt = "";
//     divGambar.appendChild(img);
//     divUtama.appendChild(divGambar);

//     var divDeskripsi = document.createElement("div");
//     divDeskripsi.className = "cart-desc";
//     var spanNama1 = document.createElement("span");
//     spanNama1.className = "cart-nama";
//     namaBarang = document.getElementById("namaBarang-"+id).textContent;;
//     console.log(namaBarang);
//     spanNama1.textContent = namaBarang;
//     var spanNama2 = document.createElement("span");
//     spanNama2.className = "cart-nama";
//     spanNama2.textContent = "Rp. 30000 x 2";
//     divDeskripsi.appendChild(spanNama1);
//     divDeskripsi.appendChild(spanNama2);
//     divUtama.appendChild(divDeskripsi);

//     var divHarga = document.createElement("div");
//     divHarga.className = "cart-price";
//     var spanTotal = document.createElement("span");
//     spanTotal.className = "row-cart-total";
//     spanTotal.textContent = "Rp. 60000";
//     divHarga.appendChild(spanTotal);
//     divUtama.appendChild(divHarga);

//     var targetElemen = document.getElementById("myCart");

//     targetElemen.appendChild(divUtama);
// }

// function perbaruiTampilanKeranjang() {
//     var cartContainer = document.getElementById("myCart");
//     cartContainer.innerHTML = "";

//     cart.forEach(item => {
//         var totalHarga = item.harga * item.jumlah;
//         var cartItem = document.createElement("div");
//         cartItem.innerHTML = `
//             <p>${item.nama}</p>
//             <p>Harga per item: Rp. ${item.harga}</p>
//             <button onclick="ubahJumlah('${item.nama}', '${item.nama.toLowerCase().replace(/\s+/g, '')}', -1)">-</button>
//             <input type="number" id="${item.nama.toLowerCase().replace(/\s+/g, '')}" value="${item.jumlah}" onchange="ubahJumlah('${item.nama}', '${item.nama.toLowerCase().replace(/\s+/g, '')}', 0)">
//             <button onclick="ubahJumlah('${item.nama}', '${item.nama.toLowerCase().replace(/\s+/g, '')}', 1)">+</button>
//             <p>Total harga: Rp. ${totalHarga}</p>
//         `;
//         cartContainer.appendChild(cartItem);
//     });
// }



// function tambahCart(){
//     <div class="row-cart">
//         <div class="cart-image">
//             <img src="img/finance.png" alt="">
//         </div>

//         <div class="cart-desc">
//             <span class="cart-nama">Barang 1</span>
//             <span class="cart-nama">Rp. 30000 x 2</span>
//         </div>

//         <div class="cart-price">
//             <span class="row-cart-total">Rp. 60000</span>
//         </div>
//     </div>
// }
