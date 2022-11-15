
let pokeNameOut;
let elements = [];

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("./assets/poke-sad.gif")
        }else{
            return res.json();
        }
    }).then((data) => {
        if(data){
            console.log(data);
            let pokeName = data.name;
            printPokeName(pokeName);
            let pokeNumber = data.id;
            printPokeNumber(pokeNumber);
            let sizeType = data.types.length;
            console.log("tanaño "+ sizeType);
            if(data.types.length == 1){
                let typePoke = data.types[0].type.name;
                printTypePoke(typePoke);
            }else{
                let typePoke = data.types[0].type.name;
                let typePoke2 = data.types[1].type.name;
                printTypePoke2(typePoke, typePoke2);
            }            
            
            let pokeImg = data.sprites.other["official-artwork"].front_default;
            //* data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default; */
            pokeImage(pokeImg);
            console.log(pokeImg);

            let abilities = data.abilities;

            for (let i = 0; i < abilities.length; i++) {
                elements.push(abilities[i].ability.name)
            }
            console.log(elements);
            printAbilities(elements);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function printPokeName(pokeName){
    const impName = document.getElementById("sectionName");
    impName.innerHTML = pokeName
}

function printPokeNumber(pokeNumber){
    const impNumber = document.getElementById("sectionNumber");
    impNumber.innerHTML = pokeNumber
}

function printTypePoke(typePoke){
    const impType = document.getElementById("sectionType");
    impType.innerHTML = typePoke
}

function printTypePoke2(typePoke, typePoke2){
    const impType = document.getElementById("sectionType");
    impType.innerHTML = `${typePoke} - ${typePoke2}` 
}

function printAbilities(abilities){
    elements = []
    const impAbility = document.getElementById("sectionAbilities")
    if (abilities.length === 1) {
        impAbility.innerHTML = abilities[0]
    }else if(abilities.length === 2){
        impAbility.innerHTML = `
        <p>${abilities[0]}</p>
        <p>${abilities[1]}</p>
        ` 
    }else{
        impAbility.innerHTML = `
        <p>${abilities[0]}</p>
        <p>${abilities[1]}</p>
        <p>${abilities[2]}</p>
        `
    }        
}