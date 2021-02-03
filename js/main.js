fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");
	var row=document.createElement("Section");
	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article");
		column.classList.add("col-sm-10","col-md-6","col-lg-3")
		row.append(column)
		//card
		var card=document.createElement("div")
		card.classList.add("card","mt-3") 
		//card-body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive");
		//name 
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-success");
		//price 
		var price=document.createElement("p");
		price.classList.add("text-danger");
		price.textContent=" ₹"+value.price+"/-";
        //original price
		var orgprice=document.createElement("p");
		orgprice.classList.add("text-danger");
		orgprice.innerHTML="original price: <s>₹"+value.price+"/-</s>";
        //parentbutton
		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2");
        //button
		var button=document.createElement("button");
		button.classList.add("btn","btn-block","btn-warning")
		button.textContent="Add to cart"
		buttonParent.append(button)

		cardBody.append(imageElement)
        cardBody.append(name);
        cardBody.append(orgprice);
        cardBody.append(price);
        cardBody.append(button)
		card.append(cardBody);
		column.append(card);

	})

}