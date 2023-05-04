class Negative extends Filter{
    constructor(parent, image){
        super(parent, image)
        this.name= "negative"
    }
    
    process_pixel(r,g,b){
        const new_r = 255-r
        const new_g = 255-g
        const new_b = 255-b

        return [new_r, new_g, new_b]
    }
}