class Img extends Tool{
    constructor(parent, filter_parent, ctx){
        super(parent)
        this.filter_parent= filter_parent
        this.ctx= ctx
        this.original= null
        this.copy_image= null
        this.filters= []
        this.is_loaded= false
    }

    draw(){
        if(this.copy_image==null){
            this.generate_copy_image()
        }
        else{
            this.ctx.putImageData(this.copy_image, 0, 0)
        }
    }

    generate_copy_image(){
        this.original.onload = () => {
            this.filters=[]
            this.copy_image=null
            this.ctx.drawImage(this.original, 0, 0)
            this.copy_image = this.ctx.getImageData(0, 0, this.original.width, this.original.height)
            this.is_loaded= true
        }
    }
    reset_copy_image(){
        this.copy_image=null
        this.ctx.drawImage(this.original, 0, 0)
        this.copy_image = this.ctx.getImageData(0, 0, this.original.width, this.original.height)
    }

    add_filter(filter){
        this.filters.push(filter)
        this.render_filter_input(this.filters.length-1)
        this.use_filter(filter)
        this.draw()
    }
    remove_filter(index){
        debugger
        this.filters.splice(index, 1)
        this.reset_copy_image()
        this.use_all_filters()
        // tengo que renderizar todos porque cambia la numeración
        // podría hacerlo con un sistema de ids, pero no me parece necesario
        // porque no cre tener que recargar muchos elementos
        this.rerender_all_filter_input()
        this.draw()

    }
    remove_all_filters(){
        this.filters=[]
        this.rerender_all_filter_input()
        this.draw()
    }

    use_filter(filter){
        this.copy_image= filter.filter(this.copy_image)
    }
    use_all_filters(){
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i]
            this.use_filter(filter)
        }
    }

    get_width(){
        return this.original.width
    }
    get_height(){
        return this.original.height
    }
    get_filters(){
        let aux= []
        for (let i = 0; i < this.filters.length; i++) {
            aux.push(this.filters[i].get_name())
        }
        return aux
    }
    set_image(files){
        if (files.length) {
            this.copy_image=null
            let src = URL.createObjectURL(files[0]); 
            this.original = new Image(); 
            this.original.src = src;
        }
    } 
    
    render(){
        //default: muestra un file input que dice "choose image"
        //si hay imagen que muestre un reset y un eliminar
        //el input va a decir "choose other image"

    }
    render_filter_input(i){
        const filter = this.filters[i];
        let applied_filter= document.createElement("div")
        applied_filter.classList.add("applied_filter")
        let name= document.createElement("p")
        name.innerText= filter.name
        let delete_button= document.createElement("input")
        delete_button.type= "button"
        delete_button.value= "x"
        delete_button.addEventListener("click", ()=>{
            this.filter_parent.removeChild(applied_filter)
            this.remove_filter(i)
        })
        applied_filter.appendChild(delete_button)
        applied_filter.appendChild(name)
        this.filter_parent.appendChild(applied_filter)

    }
    rerender_all_filter_input(){
        this.filter_parent.innerText= ''
        for (let i = 0; i < this.filters.length; i++) {
            this.render_filter_input(i)
        }

    }
}