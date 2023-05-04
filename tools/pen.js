class Pen extends Tool{
    constructor(parent, ctx){
        super(parent)
        this.ant_x= null
        this.ant_y= null
        this.pos_x= null
        this.pos_y= null
        this.ctx= ctx
    }

    draw(color){
        if(this.ant_x==null || this.ant_y==null){
            this.ant_y=this.pos_y
            this.ant_x=this.pos_x
        }
        this.ctx.beginPath()
        this.ctx.strokeStyle= color
        this.ctx.moveTo(this.pos_x, this.pos_y)
        this.ctx.lineTo(this.ant_x, this.ant_y)
        this.ctx.stroke()
    }

    move_to(pos_x,pos_y){
        this.ant_x= this.pos_x
        this.ant_y= this.pos_y
        this.pos_x= pos_x
        this.pos_y= pos_y
    }
    render(){
        let input_pen= document.createElement("input")
        input_pen.type= "button"
        input_pen.id= "pen"
        input_pen.setAttribute("selected", true)
        input_pen.value= "pen"
        input_pen.addEventListener("click", pen_or_eraser)
        
        let input_color=document.createElement("input")
        input_color.type= "color"
        input_color.id= "pen_color"
        input_color.name

        let input_eraser= document.createElement("input")
        input_eraser.type= "button"
        input_eraser.id= "eraser"
        input_eraser.setAttribute("selected", false)
        input_eraser.value= "eraser"
        input_eraser.addEventListener("click", pen_or_eraser)

        this.parent.appendChild(input_pen)
        this.parent.appendChild(input_color)
        this.parent.appendChild(input_eraser)
    }
}
