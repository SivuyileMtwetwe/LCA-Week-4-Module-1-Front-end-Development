let users

const  fetchData = async () => {
    let api =  await fetch("")

    let data = await api.json()

    users = data
console.log(users);

}


fetchData() 