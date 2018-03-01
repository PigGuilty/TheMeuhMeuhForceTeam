#pragma strict

var Text : TextMesh;

var player:Transform;

var speed : int = 50;

var speedLVL2 : int = 55;

var damp: int = 5;

private var ifEnter1:boolean=false;

private var LVL1:boolean=true;
private var LVL2:boolean=false;
private var LVL3:boolean=false;
private var LVL4:boolean=false;
private var LVL5:boolean=false;

function Start () {

}

function Update () {
    var T15 = IntParseFast(Text.text);
    if(T15>=30&&T15<=6000){
        LVL1=false;
        LVL2=true;
    }

    var rotationAngle = Quaternion.LookRotation ( player.position - transform.position);

    transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);

    if(LVL1){ GetComponent.<Rigidbody>().AddForce(transform.forward * speed); }

    if(LVL2) { GetComponent.<Rigidbody>().AddForce(transform.forward * speedLVL2); }
    
    GetComponent.<Rigidbody>().AddForce(Vector3.down * 10);
    //transform.Translate(Vector3.down*Time.deltaTime*speed);
}

function OnTriggerEnter(other : Collider){
    if(other.tag=="Ball"&&LVL1){
        var var50 = IntParseFast(Text.text);
        var var60 = var50+1;
        var newT0 = ""+ var60 +"";
        Text.text = newT0;
        
        Destroy(other.gameObject);
        Destroy(transform.gameObject);
    }else if(other.tag=="Ball"&&LVL2){
        Destroy(other.gameObject);
        
        if(ifEnter1){
            var var5 = IntParseFast(Text.text);
            var var6 = var5+1;
            var newT = ""+ var6 +"";
            Text.text = newT;

            Destroy(transform.gameObject);
        }else{
            transform.gameObject.GetComponent.<Renderer>().material.color = Color.red;

            yield WaitForSeconds(1);

            transform.GetComponent.<Renderer>().material.color = Color.white;

        }

        if(!ifEnter1)
            ifEnter1=true;
    }
}

    function  IntParseFast( value : String) : int
        {
            var result : int = 0;
            for (var i = 0; i < value.Length; i++)
            {
                var letter : char = value[i];
                result = 10 * result + char.GetNumericValue(letter);
            }
            return result;
        }