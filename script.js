function modalOpen(){
    document.querySelector('h2').innerText = "Novo Usuário";
    document.getElementById('saveValues').innerText = "Salvar";

    document.getElementById('modal').classList.add('active');
}

function modalClose() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('userRegistration').addEventListener('click', modalOpen);
document.getElementById('modalClose').addEventListener('click',modalClose);



function addUser(){
    let listUser = []

    const id = Math.floor(Math.random() * 100);
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cel = document.getElementById('cel').value;
    const city = document.getElementById('city').value;
    

    const objUser = {
        idUser: id,
        nomeUser: nome,
        emailUser: email,
        celUser: cel,
        cityUser: city
    }

    if (localStorage.getItem('client')) {
        listUser = JSON.parse(localStorage.getItem('client'));
    }

    listUser.push(objUser);

    localStorage.setItem('client', JSON.stringify(listUser));

    modalClose();
    window.location.reload();
}

document.getElementById('saveValues').addEventListener('click', addUser);

//carregar os dados do usuário
function loadUser(){
    let listUser = [];

    if (localStorage.getItem('client')) {
        listUser = JSON.parse(localStorage.getItem('client'));
    }

    if (listUser.length == 0) {
        let table = document.getElementById('bodyTable');

        table.innerHTML = `
            <tr>
                <td colspan= '5'> Nenhum usuário cadastrado </td>
            </tr>
        ` 
    }else{
        createTableUser(listUser);
    }



}

window.addEventListener('DOMContentLoaded', loadUser);

function createTableUser(dataUser){
    let table = document.getElementById('bodyTable');

    let template = '';

    dataUser.forEach(user => {
        template += `
            <tr>
                <td> ${user.nomeUser} </td>
                <td> ${user.emailUser} </td>
                <td> ${user.celUser} </td>
                <td> ${user.cityUser} </td>
                <td>
                        <button type="button" class="button green" onclick="updateUser(${user.idUser})">Editar</button>
                        <button type="button" class="button red">Excluir</button>
                </td>
            </tr>
        `
    });

    table.innerHTML = template

}

function updateUser(id){

    document.getElementById('saveValues').removeEventListener('click', addUser);

    modalOpen();

    const textTitleUpdateUser = document.querySelector('h2');
    textTitleUpdateUser.innerText = "Atualizar Usuário";

    document.getElementById('saveValues').innerText = "Atualizar";

    const getUserData = JSON.parse(localStorage.getItem('client'));

    const userData = getUserData.find(userId => userId.idUser === id);


    document.getElementById('name').value = userData.nomeUser;
    document.getElementById('email').value = userData.emailUser;
    document.getElementById('cel').value = userData.celUser;
    document.getElementById('city').value = userData.cityUser;
    
    document.getElementById('saveValues').addEventListener('click', updateUserInfo);
}


function updateUserInfo() {
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    const newCel = document.getElementById('cel').value;
    const newCity = document.getElementById('city').value;

    
    
}








