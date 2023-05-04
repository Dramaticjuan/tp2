class GaussianBlur extends KernelFilter{
    constructor(parent, image){
        super(parent, image)
        this.name= "5x5gaussianblur"
        this.kernel=[[1,4,6,4,1],[4,16,24,16,4],[6,24,36,24,6],[4,16,24,16,4],[1,4,6,4,1]]
    }
}