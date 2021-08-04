class Form {
constructor(){

this.input = createInput("Enter name")
this.title = createElement("h1")
this.button= createButton("start")

}

display(){


this.input.position(displayWidth/2-80, 200)
this.title.html("RUN FOR LIFE")
this.title.position(displayWidth/2-100,20 )
this.button.position(displayWidth/2,250)
this.button.size(100,20)


}
}