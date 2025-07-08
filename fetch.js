 
 
 
 fetch("https://dummyjson.com/products")
                .then(Response => Response.json())
                .then(data => {
                    const container = document.getElementById("container");
                    console.log(">>>>>>",data);
                    

                    data.products.map((item,index) =>{
                        const heading = document.createElement('h1');
                        heading.innerHTML = `Product : ${index + 1}`;
                        heading.style.color = "rgb(219, 199, 189)";
 
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `<h3> ${item.title} </h3>
                        <h3> Price : ${item.price} </h3>
                        <h3>Description</h3>
                        <p> ${item.description} </p>
                        <h3> Rating : ${item.rating} </h3>
                    `
                    card.appendChild(heading);
                    container.appendChild(card);
                      
            }
                    
        )
                    

                  
})