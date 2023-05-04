class Blur extends KernelFilter{
    constructor(parent, image){
        super(parent, image)
        this.name= "boxblur"
        this.kernel=[[1,1,1],[1,1,1],[1,1,1]]
    }
}