var j=document.getElementById("input1")
const b=document.getElementById("button")
var n=document.getElementById("items")   
var arr=[]
function strike(){
this.classList.add("strike") 

}
function click(){

        const m=document.createElement("li")
        const box=document.createElement("input")
        box.type="checkbox"
        

        m.innerText=j.value
        m.appendChild(box)
        
       

        // m.classList.add("list-group-item")
        //  m.classList.remove("strike") 
        m.addEventListener("click",strike)
    
        n.appendChild(m)


}

b.addEventListener("click",click)
j.addEventListener("keypress",(event)=>{
    if(event.key==="Enter")
    
    click();
})
