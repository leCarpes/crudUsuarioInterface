function modalOpen(){
    document.getElementById('modal').classList.add('active');
}

function modalClose() {
    document.getElementById('modal').classList.remove('active');
}

document.getElementById('userRegistration').addEventListener('click', modalOpen);
document.getElementById('modalClose').addEventListener('click',modalClose);



function addUser(){
    let listUser = []

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cel = document.getElementById('cel').value;
    const city = document.getElementById('city').value;

    const objUser = {
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
                        <button type="button" class="button green">Editar</button>
                        <button type="button" class="button red">Excluir</button>
                </td>
            </tr>
        `
    });

    table.innerHTML = template

}











