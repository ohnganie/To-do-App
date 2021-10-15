const inputDescription = document.querySelector('#filter') as HTMLInputElement;
const inputForm = document.querySelector('form')!;
const newDiv = document.querySelector('#items') as HTMLDivElement;

let myArray: string[]=[];
interface ProjectInterface {
    description: string;
}

class todo_List implements ProjectInterface {
    constructor (public description: string) {}
    
    hello() {
        return `${this.description}`;
    }

 }

inputForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const entry = new todo_List(inputDescription.value);
    let val = entry.hello();
    myArray.push(val);
    arr = myArray.join('\r\n');
    newDiv.innerText = arr;
    /*newDiv.innerText = entry.hello();*/
    const check = document.createElement("input");
    check.setAttribute("type","checkbox");

    newDiv.appendChild(check);
    console.log(newDiv);

    inputForm.reset(); 
})