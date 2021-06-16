const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

async function preload() {
    bg = await getBackgroundImg()
    backgroundImg = loadImage(bg)
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

async function draw(){
    background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);
    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var res = await (await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")).json()
    hour = parseInt(res["datetime"].slice(11,13));
    if(04 <= hour && hour < 06){
        return("sunrise1.png")
    }else
    if(06 <= hour && hour < 08){
        return("sunrise2.png")
    }else
    if(08 <= hour && hour < 10){
        return("sunrise3.png")
    }else
    if(10 <= hour && hour < 12){
        return("sunrise4.png")
    }else
    if(12 <= hour && hour < 14){
        return("sunrise5.png")
    }else
    if(14 <= hour && hour < 16){
        return("sunrise6.png")
    }else
    if(16 <= hour && hour < 18){
        return("sunset7.png")
    }else
    if(18 <= hour && hour < 20){
        return("sunset8.png")
    }else
    if(20 <= hour && hour < 22){
        return("sunset9.png")
    }else
    if(22 <= hour || hour === 23){
        return("sunset10.png")
    }else
    if(00 <= hour && hour < 02){
        return("sunset11.png")
    }else
    if(02 <= hour && hour < 04){
        return("sunset12.png")
    }
}
