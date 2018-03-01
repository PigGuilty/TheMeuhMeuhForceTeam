#pragma strict

var Life : TextMesh;
var Loose:TextMesh;
var cameraO:Transform;

var timeToRegen:int=10;
var spawnPoint:Transform;
var player:Transform;
var blood:GameObject;
private var BLOOD:GameObject;

function Start () {

}

function Update () {
    var live = IntParseFast(Life.text);

    if(live<100&&live!=0){
        Regen();
    }else if(live<=0){
        Loose.text="Vous avez perdu";
    }
}

function OnTriggerEnter(other : Collider){
    if(other.tag=="Vache"){
        if(BLOOD!=null)
            Destroy(BLOOD);

        var vie:int=IntParseFast(Life.text);
        if(vie!=0)
            vie = vie - 1; 

        var text2=""+vie;

        Life.text=text2;

        //BLOOD = Instantiate(blood, spawnPoint.position, spawnPoint.rotation);

        //BLOOD.transform.parent = cameraO.transform;
    }
}

function  IntParseFast( value : String) : int{
    var result : int = 0;
    for (var i = 0; i < value.Length; i++)
    {
        var letter : char = value[i];
        result = 10 * result + char.GetNumericValue(letter);
    }
    return result;
}

function Regen(){
    var live = IntParseFast(Life.text);
    while(live!=100&live!=0){
        live = IntParseFast(Life.text);
        if(live!=0&&live!=100){
            yield WaitForSeconds(timeToRegen);
            live = live+1;
            yield WaitForSeconds(timeToRegen);
        }
        var nTEXT = ""+live;
        Life.text = nTEXT;
    }
}