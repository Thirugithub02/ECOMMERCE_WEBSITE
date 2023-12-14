const nodes=document.querySelectorAll('.amt');
        const arr =Array.from(nodes);
        const res =arr.reduce((acc,curr) =>{
         return acc+= Number(curr.textcontent)
           },0);
        document.getElementById("net").innerHTML ="RS :" +res;
