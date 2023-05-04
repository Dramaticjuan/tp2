class UnsharpMasking extends KernelFilter{
    constructor(parent, image){
        super(parent, image)
        this.name= "unsharpmasking"
        this.kernel=[[1,4,6,4,1],[4,16,24,16,4],[6,24,-476,24,6],[4,16,24,16,4],[1,4,6,4,1]]
    }
}