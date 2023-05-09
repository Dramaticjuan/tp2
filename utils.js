function resize_canvas(width, height){
    canvas.width= width
    canvas.height= height
    canvas.style.width= `${width}px`
    canvas.style.height= `${height}px`
}
function generate_white_canvas(){
    ctx.fillStyle = default_canvas_color
    ctx.fillRect(0,0, canvas.width, canvas.height)
}
function clear_canvas(){
    img.remove_all_applied_filters()
    img.set_image(null)
    disable_childs(filter_section)
    file_input.value=""
    resize_canvas(300, 300)
    generate_white_canvas()
}
function download_image(){
    console.log("eee")
    let link = document.createElement('a')
    link.download = 'filename.png'
    link.href = canvas.toDataURL("image/png")
    link.click()
}