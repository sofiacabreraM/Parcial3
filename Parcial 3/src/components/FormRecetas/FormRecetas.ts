
//import styles from  '*.css'

import { dispatch } from "../../store";

const UserInputs = {
    Name: "",
    ingredients: "",
    instructions: "",
    img: "", 

}
   

class FormRecetas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
    //const css = this.ownerDocument. createElement ('style*');
   // css. innerHTML = styles .tostring();
    //this.shadowRoot?.appendChild(css);

        const NameText = this.ownerDocument.createElement('h3');
        NameText.textContent = "Nombre de la receta"
        this.shadowRoot?.appendChild(NameText);
        const Name = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(Name);
        Name.addEventListener ("change" ,(e:any)=>{
        UserInputs.Name = e.target.Value
        })

        const IngredientsText = this.ownerDocument.createElement('h3');
        IngredientsText.textContent = "Que ingredientes necesitas?"
        this.shadowRoot?.appendChild(IngredientsText);
        const ingredients = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(ingredients);
        ingredients.addEventListener ("change" ,(e:any)=>{
            UserInputs.ingredients = e.target.Value
            })

        const instructionsText = this.ownerDocument.createElement('h3');
        instructionsText.textContent = "ingresa las intrucciones"
        this.shadowRoot?.appendChild(instructionsText);
        const instructions = this.ownerDocument.createElement('input');
        this.shadowRoot?.appendChild(instructions);
        instructions.addEventListener ("change" ,(e:any)=>{
            UserInputs.instructions = e.target.Value
            })

        const imgText = this.ownerDocument.createElement('h3');
        imgText.textContent = "ingresa una imagen"
        this.shadowRoot?.appendChild(imgText);
        const img = this.ownerDocument.createElement('input');
        img.type = "url"
        this.shadowRoot?.appendChild(img);
        img.addEventListener ("change" ,(e:any)=>{
            UserInputs.img = e.target.Value
            })

        const button = this.ownerDocument.createElement('button');
        button.textContent = "Guardar"
        this.shadowRoot?.appendChild(button);
        button.addEventListener ("click" ,()=>{
           console.log(UserInputs) 
           dispatch(SaveRecipes(UserInputs))
            })
    }
}

customElements.define('app-formrecetas', FormRecetas)
export default FormRecetas