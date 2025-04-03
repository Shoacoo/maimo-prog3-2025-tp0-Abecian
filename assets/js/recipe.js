const main = async () => {
    const searchParams = new URLSearchParams (window.location.search);
    console.log(searchParams.get('id'));
    const id = searchParams.get('id');

    const $content = document.querySelector('.content');

    const response = await fetch (`https://dummyjson.com/recipes/${id}`)
    const responseData = await response.json();

    console.log(responseData.name);

    $content.innerHTML = 
    `
        <h1>
        ${responseData.name} 
        </h1>
        <img src = "${responseData.image}" alt = "${responseData.name}"/>
        <ul> 
        ${responseData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        
        </ul>

    `
}

main();