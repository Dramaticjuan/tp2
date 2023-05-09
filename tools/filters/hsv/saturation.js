class Saturation extends HSVFilter{
    constructor(parent, image) {
        super(parent, image)
        this.name= "saturation"
    }
    process_pixel(r,g,b){
        let hsv= this.rgb_to_hsv([r,g,b])
        hsv[1]= hsv[1]+0.2
        if(hsv[1]>1){
            hsv[1]=1
        }
        return this.hsv_to_rgb(hsv)
    }
}