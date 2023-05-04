class Filter extends Tool{
    constructor(parent, image){
        super(parent)
        this.output= null
        this.image=image
        this.name= "Abstracto"
    }

    filter(image){
        this.output= image
        const data= image.data
        for (let i = 0; i < data.length; i+=4) {
            this.apply_filter(i, image)
        }
        return this.output
    }

    apply_filter(i, image){
        const data= image.data

        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const new_rgb= this.process_pixel(r,g,b)


        this.push_pixel(i, new_rgb)
    }
    process_pixel(r,g,b){

        return [r,g,b]
    }

    push_pixel(i, rgb){

        this.output.data[i]= rgb[0]
        this.output.data[i+1]= rgb[1]
        this.output.data[i+2]= rgb[2]
    }

    render(){
        let input= document.createElement("input")
        input.type = "button"
        input.value= this.name
        input.addEventListener("click", ()=>{
            this.image.add_filter(this)
        })

        this.parent.appendChild(input)
    }
}