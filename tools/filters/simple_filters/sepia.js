class Sepia extends Filter{
    constructor(parent, image){
        super(parent, image)
        this.name= "sepia"
    }
    
    process_pixel(r,g,b){
        const new_r = Math.min(0.393 * r + 0.769 * g + 0.189 * b, 255)
        const new_g = Math.min(0.349 * r + 0.686 * g + 0.168 * b, 255)
        const new_b = Math.min(0.272 * r + 0.534 * g + 0.131 * b, 255)

        return [new_r, new_g, new_b]
    }
}