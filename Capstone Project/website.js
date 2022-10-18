let carts=document.querySelectorAll('.add-cart');

if (localStorage!= null)
    localStorage.setItem('coupon', 0); // i had to set the value by default to 0 so that whenever the page is loaded it shows me the price on the cart and when i click on apply(discount section) it takes the total price - discount 


let products=[
    {
    name:"dvd writer",
    tag:"Hp",                   //this is what is going to be displayed in the cart section
            price: 599,
            inCart:0
        },
        {
            name:"Schoolbag",
            tag:"bag",
            price: 499,
            inCart:0
        },
        {
            name:"Nokia T20",
            tag:"Nokia-T20",
            price:4499,
            inCart:0
        },
        {
            name:"Macbook",
            tag:"macbook",
            price:11499,
            inCart:0
        },
        {
            name:"Iphone 6",
            tag:"iphone6",
            price:6999,
            inCart:0
        },
        {
            name:"iphone 12",
            tag:"iphone12",
            price:16999,
            inCart:0
        },
        {
            name:"PS4 500GB",
            tag:"ps4",
            price:5999,
            inCart:0
        },
        {
            name:"Xbox One",
            tag:"xboxone",
            price:5499,
            inCart:0
        },
        {
            name:"Ps5 1TB",
            tag:"ps5",
            price:8999,
            inCart:0
        },
        {
            name:"Hp Pavilion",
            tag:"HPPavilion",
            price:6500,
            inCart:0
        },  
];

    for (let i=0; i < carts.length; i++){
        carts[i].addEventListener('click', () => {  //The more i click onto add to cart the items quantity will keep adding 
        cartNumbers(products[i]);
        totalCost(products[i])
        })
        }

    function onLoadCartNumbers(){
        let productNumbers=localStorage.getItem('cartNumbers');
         if(productNumbers){
            document.querySelector('.cart span').textContent = productNumbers;
        }
        }


    function cartNumbers(product) {

        let productNumbers = localStorage.getItem('cartNumbers'); 
        productNumbers = parseInt(productNumbers);
       
        if( productNumbers ) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textcontent =  productNumbers + 1; 
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textcontent = 1;
        }
            setItems(product);
            }

    function setItems(product){
        let cartItems=localStorage.getItem('productsInCart'); 
        cartItems=JSON.parse(cartItems);

        if(cartItems != null){
        if(cartItems[product.tag]== undefined) {
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;

        } else{
        product.inCart = 1;
        
        cartItems = {
            [product.tag]:product
        }
        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        }

    
    function totalCost(product){
        
        let cartCost=localStorage.getItem('totalCost');

        if(cartCost!= null) {                                   //this will display the total cost 
            cartCost=parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
            alert(cartCost + product.price)
        } else{
            localStorage.setItem("totalCost", product.price);
            alert(product.price)
        }
        }


    function displayCart(){

        let cartItems=localStorage.getItem("productsInCart"); 
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost=localStorage.getItem('totalCost');
        let input=localStorage.getItem("input");
        let delivery=localStorage.getItem("delivery");
        let collection=localStorage.getItem("collection");

        if (cartItems && productContainer){
            productContainer.innerHTML='';
            Object.values(cartItems).map(item => {

                productContainer.innerHTML += `

                <div class="products">
                    <img src="${item.tag}.jpeg">             
                    <span> ${item.name}</span>

                <div class="price"> R${item.price} </div>
                <div class="quantity">
                    
                    <span>${item.inCart}</span>
                    
                </div>

                <div class="total">
                    R${item.inCart * item.price}
                </div>
                </div>
                `;
            });

            productContainer.innerHTML+= `
            
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total:</h4>
                <h4 class="basketTotal">
                    R${cartCost}
                </h4>
            `

            productContainer.innerHTML+= `
            <div class="TotalContainers">
                <h4 class="vat"> + 
                    15% VAT
                    Total Price= </h4>
                <h4 class="total1">R${Number(cartCost) + (Number(cartCost) *15 / 100) - Number(input) + Number(delivery) + Number(collection)}
                </h4>
            `
            }

            }


    function addCoupon() {        //this function should give a discount of R349
        let input = document.getElementById("promocd").value;
        if (input.value=349){
            localStorage.setItem("input", 349);
            }
        }
        
    function button(){                  //Button to generate Reference Number
        let user_id=Date.now();
        alert(" Thank You For Shopping With Us. Your Reference Number is " + (user_id));
        }

    function myfunction(answer){   //this function is for the delivery and collection methods, when you click on delivery and you reload the page price will add automatically
        let delivery=document.getElementById("delivery"); 
        let collection=document.getElementById("collection");
        if(answer.value==1){
            localStorage.setItem("delivery", 649);}
        if(answer.value==2){
            localStorage.setItem("collection", 349);
        }
        
        
        // if(answer.value==0){
        // document.getElementById('showOne').classList.remove('data1');
        // }else if(answer.value==1) {
        // document.getElementById('showTwo').classList.remove('data2');
        // } else{
        // document.getElementById('showOne').classList.add('data1');
        //  } 
        };
         

        onLoadCartNumbers();
        displayCart();


    $(function(){ // Dropdown toggle
        $('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
        });


    $(document).click(function(e){ 
        var target = e.target; 
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
        //{ $('.dropdown').hide(); }
          { $('.dropdown').slideUp(); }
        });
        });  



   $(document).ready(function(){
      $("#chainedEffect").click(function(){         //a function to start a chained effect
        let img = $(".image");
        img.animate({height: 450,width: 500}, 10000);
    
      });
   });



    $('p').click(function() {
    $('p').fadeOut(3000).delay(1000).fadeIn(3000); //the picture will take 3 sec to fadeOut then delay 1 sec and then the picture comes back. 
});


