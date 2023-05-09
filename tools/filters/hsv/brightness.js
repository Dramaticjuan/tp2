class Brightness extends HSVFilter{
    constructor(parent, image) {
        super(parent, image)
        this.name= "bright"
    }
    process_pixel(r,g,b){
        let hsv= this.rgb_to_hsv([r,g,b])
        hsv[2]= hsv[2]+0.2
        if(hsv[2]>1){
            hsv[2]=1
        }
        return this.hsv_to_rgb(hsv)
    }
}