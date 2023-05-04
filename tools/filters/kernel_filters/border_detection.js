class EdgeDetenction extends KernelFilter{
    constructor(parent, image){
        super(parent, image)
        this.name= "no-funciono"
        this.kernel= [[[-1,0,1],
                       [-2,0,2],
                       [-1,0,1]],

                      [[-1,-2,-1],
                       [0,0,0],
                       [1,2,1]]]
    }
    apply_filter(i, image){
        //const output_x= super.convolve(image, i, this.kernel[0])
        const output_y= super.convolve(image, i, this.kernel[1])
        //const pixel_x= this.color_average(output_x[0], 0)
        const pixel_y= this.color_average(output_y[0], 0)
        // const mag= Math.ceil(Math.sqrt(pixel_x*pixel_x) + (pixel_y*pixel_y))

        //this.push_pixel(i, [pixel_x,pixel_x,pixel_x])
        this.push_pixel(i, [pixel_y,pixel_y,pixel_y])
    }
    color_average(arr, val){
        let aux= 0
        for (let i = 0; i < arr.length; i++) {
            aux+=arr[i][0]
            aux+=arr[i][4]
            aux+=arr[i][7]
            
        }
        if (aux>0){
            return 255
        }
        else{
            return 0
        }
    }
}