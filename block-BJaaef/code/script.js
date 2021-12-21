let parentDiv = document.querySelector(".parent");
parentDiv.style.display = "flex";
parentDiv.style.flexWrap = "wrap";
parentDiv.style.padding = "4rem";

got.houses.forEach((book) => {
    book.people.forEach((house) => {
        
        let div = document.createElement("div");
        div.style.width = "350px";
        div.style.height = "200px";
        div.style.border = "1px solid black";
        div.style.margin = "15px";
        div.style.padding = "1rem";
        div.style.borderRadius = "5px";
        let img = document.createElement("img");
        img.style.borderRadius = "50%";
        img.style.border = "2px solid darkgreen"
        img.style.objectFit = "cover";
        let h2 = document.createElement("h2");
        h2.style.fontSize = "1.2rem";
        h2.style.marginTop = "-50px";
        h2.style.marginBottom = "3rem"
        h2.style.textAlign = "center";
        let p = document.createElement("p");
        p.style.marginBottom = "1rem"
        p.style.textAlign = "center";
        let btn = document.createElement("button");
        btn.style.background = "rgb(231,237,253)"
        btn.style.padding = "5px"
        btn.innerText = "Learn More!"
        btn.style.width = "100%"
        btn.style.borderRadius = "5px";

        img.src = house.image;
        h2.innerText = house.name;
        p.innerText = house.description;


        div.append(img, h2, p, btn);
        parentDiv.append(div);

    })
})