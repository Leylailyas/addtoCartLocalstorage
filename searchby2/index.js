const mylist = document.getElementById("mylist");
const list = document.getElementById("list");


axios.get('https://dummyjson.com/users')
.then(res => {
   const db = res.data.users;
    console.log(db);
    db.map((item) => {
        let card = document.createElement('div');
        card.className = "cardBox";
        card.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="cardTextBox">
                <h2>${item.firstName}</h2>
                <h2>${item.lastName}<h2>
                <p>${item.email} $</p>
                <p>${item.phone} $</p>
                <p>${item.email} $</p>
            </div>
            <button onclick="addToCart(${item.id})">Add to cart</button>
            
        `;
        mylist.appendChild(card);
    });
});