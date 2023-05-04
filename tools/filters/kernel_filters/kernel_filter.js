class KernelFilter extends Filter {
    constructor(parent, image){
        super(parent, image)
        this.kernel=[[0,0,0],[0,1,0],[0,0,0]]
    }

    apply_filter(i, image){
        const [output, kernel_val]= this.convolve(image, i, this.kernel)
        const rgb= this.color_average(output, kernel_val)

        this.push_pixel(i, rgb)
    }

    convolve(image, i, kernel){
        const data= image.data
        const pos_in_coordinates= this.position_data_to_coordinate(i, image)
        let output=[]
        const offset= Math.trunc(kernel.length/2)
        let total_kernel_val= 0

        for (let v = 0; v < kernel.length; v++) {
            output.push([])
            for (let h = 0; h < kernel[v].length; h++) {
                const offset_val= {x:h- offset, y:v-offset}
                const pos_coor= this.check_border(pos_in_coordinates, offset_val, image)
                const pos= this.coordinate_to_position_data(pos_coor.x, pos_coor.y, image)

                const kernel_value= kernel[v][h]

                output[v].push(data[pos]*kernel_value)
                output[v].push(data[pos+1]*kernel_value)
                output[v].push(data[pos+2]*kernel_value)
                total_kernel_val+= kernel_value
            }
        }

        return [output, total_kernel_val]
    }
    color_average(arr, val){

        let r= 0
        let g= 0
        let b= 0
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j+=3) {
                r+= arr[i][j];
                g+= arr[i][j+1];
                b+= arr[i][j+2];
                
            }
            
        }
        return[r/val,g/val,b/val]
    }

    check_border(i, offset, image){
        let point={
            x: i.x+offset.x,
            y: i.y+offset.y
        }
        if (point.x<0){
            point.x=0
        }
        if(point.x>((image.width-1))){
            point.x= image.width-1
        }
        if (point.y< 0){
            point.y= 0
        }
        if(point.y>((image.width-1))){
            point.y= image.height-1
        }

        return point
    }
    position_data_to_coordinate(i, image){
        let aux_x= (i/4)%image.width
        let aux_y= Math.trunc((i/4)/image.width)
        let point={
            x: aux_x,
            y: aux_y
        }
        
        return point
    }

    coordinate_to_position_data(x, y, image){
        let aux= 0
        if(x > 0 && x < image.width){
            aux+= x
        }
        else if (x > image.width){
            aux+= image.width-1
        }
        if(y > 0 && y < image.height){
            aux+= y*(image.width)
        }
        else if(y > image.height){
            aux+= (image.height-1)*(image.width-1)
        }

        return aux*4 
    }
}