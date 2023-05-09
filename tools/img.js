class Img {
    constructor(filter_parent, ctx){
        this.filter_parent= filter_parent
        this.ctx= ctx
        this.original= null
        this.copy_image= null
        this.applied_filters= []
    }

    draw(){
        if(this.copy_image==null){
            this.generate_copy_image()
        }
        else{
            this.ctx.putImageData(this.copy_image, 0, 0)
        }
    }

    reset_image(){
        this.remove_all_applied_filters()
        this.generate_copy_image()
    }
    generate_copy_image(){
        this.copy_image=null
        this.ctx.drawImage(this.original, 0, 0)
        this.copy_image = this.ctx.getImageData(0, 0, this.original.width, this.original.height)
    }

    add_filter(filter){
        this.applied_filters.push(filter)
        this.render_applied_filter(this.applied_filters.length-1)
        this.use_filter(filter)
        this.draw()
    }
    remove_filter(index){
        this.applied_filters.splice(index, 1)
        this.reset_copy_image()
        this.use_all_applied_filters()
        // tengo que renderizar todos porque cambia la numeración
        // podría hacerlo con un sistema de ids, pero no me parece necesario
        // porque no cre tener que recargar muchos elementos
        this.rerender_all_filters_applied()
        this.draw()

    }
    remove_all_applied_filters(){
        this.applied_filters=[]
        this.rerender_all_filters_applied()
    }

    use_filter(filter){
        this.copy_image= filter.filter(this.copy_image)
    }
    use_all_applied_filters(){
        for (let i = 0; i < this.applied_filters.length; i++) {
            const filter = this.applied_filters[i]
            this.use_filter(filter)
        }
    }

    get_width(){
        return this.original.width
    }
    get_height(){
        return this.original.height
    }
    set_image(image_src){
        this.copy_image=null
        this.remove_all_applied_filters()
        if (image_src==null){
            this.original=null
        } else{
            let src = URL.createObjectURL(image_src); 
            this.original = new Image(); 
            this.original.src = src;
        }
    }
    render_applied_filter(i){
        const filter = this.applied_filters[i];
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
    delete_applied_filters_inputs(){
        this.filter_parent.innerText= ''
    }
    rerender_all_filters_applied(){
        this.delete_applied_filters_inputs()
        for (let i = 0; i < this.applied_filters.length; i++) {
            this.render_applied_filter(i)
        }

    }
}