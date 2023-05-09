/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my_canvas")
const ctx = canvas.getContext('2d')
const default_canvas_color= "#F0F0F0"


const image_section= document.getElementById("file_options")
const pen_section= document.getElementById("pen_options")
const filter_section= document.getElementById("filters")
const canvas_section= document.getElementById("canvas_container")
const applied_filters_section= document.getElementById("applied_filters")


const pen= new Pen(pen_section, ctx)
const img= new Img(applied_filters_section, ctx)
const filters= [new Sepia(filter_section, img),
    new GrayScale(filter_section, img),
    new Binarization(filter_section, img),
    new Negative(filter_section, img),
    new GaussianBlur(filter_section, img),
    new Blur(filter_section, img),
    new UnsharpMasking(filter_section, img),
    new Brightness(filter_section, img),
    new Saturation(filter_section, img)
    ]

const file_input = document.getElementById('file_input')
const file_input_label = document.getElementById('file_input_label')
const reset_image = document.getElementById('reset_image')
const reset_canvas = document.getElementById('reset_canvas')
const download_button = document.getElementById('download')

file_input.addEventListener('change', () => {
    img.set_image(file_input.files[0])
    img.original.onload=()=> {
        resize_canvas(img.get_width(), img.get_height())
        img.draw()
    }
    reset_canvas.value="clear canvas"
    file_input_label.innerHTML="choose other image"
    reset_image.disabled=false
    download_button.disabled=false
    enable_childs(filter_section)
    enable_childs(pen_section)
})
reset_image.addEventListener('click', ()=>{
    img.reset_image()
    img.draw()
})
reset_canvas.addEventListener('click',()=>{
    clear_canvas()
    reset_canvas.value="clear canvas"
    file_input_label.innerHTML="choose an image"
    download_button.disabled=false
    enable_childs(pen_section)
    disable_childs(filter_section)
})
download_button.addEventListener('click', download_image)


pen.render()
const input_pen= document.getElementById("pen")
const input_eraser= document.getElementById("eraser")
const input_color= document.getElementById("pen_color")

render_collection(filters)
disable_childs(filter_section)
disable_childs(pen_section)


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
    pen.not_pen()
}
function pen_color(){
    if(pen.is_pen){
        return input_color.value;
    }
    return default_canvas_color
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
 *      Lógica de los filtros
 *
 *-------------------------------
*/
function render_collection(tools){
    for (let i = 0; i < tools.length; i++) {
        tools[i].render()
    }
}
function disable_childs(parent_node){
    parent_node.childNodes.forEach((i)=>{
        i.disabled=true
    })

}
function enable_childs(parent_node){
    parent_node.childNodes.forEach((i)=>{
        i.disabled=false
    })

}