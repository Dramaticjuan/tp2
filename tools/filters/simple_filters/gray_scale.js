class GrayScale extends Filter{
    constructor(parent, image){
        super(parent, image)
        this.name= "gray scale"
    }

    process_pixel(r,g,b){
        const avg = (r+g+b)/3
        const new_r = avg
        const new_g = avg
        const new_b = avg

        return [new_r, new_g, new_b]
    }
}