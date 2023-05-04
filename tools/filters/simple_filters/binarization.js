class Binarization extends Filter{
    constructor(parent, image){
        super(parent, image)
        this.name= "binarization"
        this.threshold=0
    }

    process_pixel(r,g,b){
        const max_rbg= (255+255+255)
        const avg = ((r+g+b)-(max_rbg/2))> this.threshold ? 255 : 0
        const new_r = avg
        const new_g = avg
        const new_b = avg

        return [new_r, new_g, new_b]
    }
}