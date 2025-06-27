async function getUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        return data.results[0];
    } catch (error) {
        console.log('Ошибка:', error);
    }
}

function updateUser(user) {
    document.getElementById('userPhoto').src = user.picture.large;
    document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('userPhone').textContent = `Phone: ${user.phone}`;
    document.getElementById('userAddress').textContent = `Address: ${user.location.city}, ${user.location.country}`;
    document.getElementById('userEmail').textContent = `Email: ${user.email}`;
}

document.getElementById('changeBtn').addEventListener('click', async () => {
    const user = await getUsers();

    
    updateUser(user);
});


