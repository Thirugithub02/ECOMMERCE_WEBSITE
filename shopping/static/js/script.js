document.addEventListener("DOMContentLoaded",function(event){
    const btnPlus =document.getElementById("btnPlus");
    const btnMinus =document.getElementById("btnMinus");
    const txtQty =document.getElementById("txtQty");
    const pid= document.getElementById ("pid");
    const btnCart =document.getElementById("btnCart");
    
    btnPlus.addEventListener("click", function(){
        let qty=parseInt(txtQty.value ,10);
        qty=isNaN(qty)?0:qty;
        //console.log(qty);
        if(qty<10){
            qty++;
            txtQty.value=qty;
        }
    });

    btnMinus.addEventListener("click", function(){
        let qty=parseInt(txtQty.value ,10);
        qty=isNaN(qty)?0:qty;
        //console.log(qty);
        if(qty>1){
            qty--;
            txtQty.value=qty;
        }
    });
    
    btnCart.addEventListener("click", function(){
        let qty=parseInt(txtQty.value ,10);
        qty=isNaN(qty)?0:qty;
        if (qty>0){
            let postobj={
                'product_qty':qty,
                'pid':pid.value
            }
            //console.log(postobj);
            fetch("/addtocart",{
                method:'POST',
                credentials:'same-origin',
                headers:{
                    'Accept' :'application/json',
                    'X-Requested-With':'XMLHttpRequest',
                    'X-CSRFToken':'{{csrf_token}}',
                },
                body: JSON.stringify(postobj)
            }).then(response => {
                return response.json();
            }).then(data =>{
                //console.log(data);
                alert(data ['status']);
            });
            
        }else{
            alert("please Enter the quantity");
        }
    });    
        

});