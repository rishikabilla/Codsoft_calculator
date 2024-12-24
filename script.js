const buttons=document.querySelectorAll("button");
const display=document.querySelector(".display");
let current_value="";
const max_len=15;

buttons.forEach(button=>
{
    button.addEventListener("click",function()
{   
    const icon = this.querySelector("i");
    let  val="";
    if (icon) {
    
        if (icon.classList.contains("fa-xmark")) 
        {
            val = "*"; 
        } else if (icon.classList.contains("fa-divide")) 
        {
            val = "/"; 
        }
        else if (icon.classList.contains("fa-delete-left")) {
            
            current_value = current_value.slice(0, -1);  
            display.textContent = current_value || "0";  
            return; 
        }
    }
    else
    {
    val=this.textContent.trim();
    }
    if(val==="C")
    {
        current_value="";
    }
    else if(val==="=")
    {
        try
        {
            current_value=eval(current_value);
        }
        catch(error)
        {
           current_value="Error";
        }
        
    }
    else
    {
        current_value+=val;
    }
    if (current_value.length > max_len) {
        display.style.fontSize = "1em"; 
    } else {
        display.style.fontSize = "2.5em";  
    }
    display.textContent = current_value || "0";
});
});