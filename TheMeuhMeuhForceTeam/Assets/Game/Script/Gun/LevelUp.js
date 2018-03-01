#pragma strict

var Text : TextMesh;
var textLVLUP : TextMesh;

var isLVL2passed : boolean = false;

function Start () {

}

function Update () {
    var T15 = IntParseFast(Text.text);

    if(T15>=30&&T15<=6000&&!isLVL2passed){
        LVL2();

        isLVL2passed = true;
    }
}

function  IntParseFast( value : String) : int {
    var result : int = 0;
    for (var i = 0; i < value.Length; i++)
    {
        var letter : char = value[i];
        result = 10 * result + char.GetNumericValue(letter);
    }
    return result;
}

function LVL2(){
    textLVLUP.text = "Vous passez au niveau 2";
    yield WaitForSeconds(10);
    textLVLUP.text = "";
}