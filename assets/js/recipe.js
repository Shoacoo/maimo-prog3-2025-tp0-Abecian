const main = async () => {
    const searchParams = new URLSearchParams (window.location.search);
    console.log(searchParams.get('id'));
    const id = searchParams.get('id');

    const $content = document.querySelector('.content');

    const response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const responseData = await response.json();

    console.log(responseData.name);

    $content.innerHTML = 
    `
        <h1 class ="recipe_tittle">
        ${responseData.name} 
        </h1>
        <hr  id = "recipe_separator">
       <div class= "recipe_conteiner">
        <img src = "${responseData.image}" class ="recipe_img" alt = "${responseData.name}"/>
        <ul class= "ingredients"> 
        ${responseData.ingredients.map(ingredient => `<li class= "ingredient"> ☯ ${ingredient}</li>`).join("")}
        </ul>
          </div>
           <hr class="separator">
            <h2 class = "intructions"> Intrucciones </h2>
          <p class ="intructions_p">
        ${responseData.instructions}
        </p>

    `;
};

main();