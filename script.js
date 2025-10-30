// IMPORTANT - substitute your own backend url!
const API_BACKEND_URL = "https://github.dev/mightybalut-bot/Week-4-backend";  

const itemName = document.getElementById('inpName');
const itemDesc = document.getElementById('inpDesc');

const btnAdd = document.getElementById('btnAdd');
const btnList = document.getElementById('btnList');

const itemList = document.getElementById('lstItems');


btnAdd.addEventListener('click', addItem );

btnList.addEventListener('click', listItems );


async function addItem() {

    let new_item_name = itemName.value;
    let new_item_desc = itemDesc.value;

    // could check that name,desc are not blank

    // call the back-end route that adds a record
    await fetch(`${https://github.dev/mightybalut-bot/Week-4-backend}/item`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ new_item_name,new_item_desc }),
    });

}

async function listItems() {
    // call the backend route that gets all records
    let resp = await fetch(`${API_BACKEND_URL}/items`);
    let data = await resp.json();
    console.log(data);

    itemList.innerHTML = ""; // clear list

    for( item of data ) {
        let li = document.createElement('li');
        li.textContent = item.item_name + ' - ' + item.item_desc;
        itemList.appendChild(li);
    }

}