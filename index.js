/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my_canvas")
const ctx = canvas.getContext('2d')
const default_canvas_color= "#F0F0F0"

const pen_section= document.getElementById("pen_options")
const filter_section= document.getElementById("filters")
const image_section= document.getElementById("file_options")
const applied_filters_section= document.getElementById("applied_filters")


const pen= new Pen(pen_section, ctx)
const img= new Img(image_section, applied_filters_section, ctx)
const filters= [new Sepia(filter_section, img),
    new GrayScale(filter_section, img),
    new Binarization(filter_section, img),
    new Negative(filter_section, img),
    new GaussianBlur(filter_section, img),
    new Blur(filter_section, img),
    new UnsharpMasking(filter_section, img),
    new EdgeDetenction(filter_section, img)
    ]
const file_input = document.getElementById('file_input')


pen.render()

const input_pen= document.getElementById("pen")
const input_eraser= document.getElementById("eraser")
const input_color= document.getElementById("pen_color")





ctx.fillStyle = default_canvas_color
ctx.fillRect(0,0, canvas.width, canvas.height)


/*-------------------------------
 *      Lógica de pen
 *-------------------------------
*/
canvas.addEventListener('mousedown', start_drawing)
function start_drawing(e){
    canvas.addEventListener('mousemove', draw_line)
    canvas.addEventListener('mouseup', stop_drawing)
    canvas.addEventListener('mouseout', stop_drawing)
}
function draw_line(e){
    pen.move_to(e.offsetX, e.offsetY)
    pen.draw(pen_color())
    
}
function stop_drawing(){
    canvas.removeEventListener('mousemove', draw_line)
    pen.move_to(null, null)
}



/*-------------------------------
 *      Lógica del color 
 *
 *-------------------------------
*/
function pen_or_eraser(){
    not_selected(input_eraser)
    not_selected(input_pen)
}
function pen_color(){
    if(input_pen.getAttribute("selected")=== 'true'){
        return input_color.value;
    }
    else {
        return default_canvas_color
    }
}
function not_selected(dom_node){
    if(dom_node.getAttribute("selected")=== "true"){
        dom_node.setAttribute("selected", false)
    }
    else{
        dom_node.setAttribute("selected", true)
    }
}



/*-------------------------------
 *      Lógica de la imagen
 *
 *-------------------------------
*/
let generated=false
file_input.addEventListener('change', () => {
    img.set_image(file_input.files)
    img.draw()
    if(!generated){
        generate_filter_inputs()
        generated=true
    }
})



/*-------------------------------
 *      Lógica de los filtros
 *
 *-------------------------------
*/
function generate_filter_inputs(){
    for (let i = 0; i < filters.length; i++) {
        filters[i].render(filter_section)
    }
}



function resize_canvas(width, height){
    canvas.width= width
    canvas.height= height
    canvas.style.width= `${width}px`
    canvas.style.height= `${height}px`
}