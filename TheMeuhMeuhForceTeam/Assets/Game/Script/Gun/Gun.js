#pragma strict

var bullet : Transform;
var spawnPoint:Transform;

var Speed = 16000;

function Start () {

}

function Update () {
    if(Input.GetButtonUp("Fire1")){
        Shot();
    }
}

function Shot()
{
    var pel = Instantiate(bullet, spawnPoint.position, spawnPoint.rotation);
    pel.GetComponent.<Rigidbody>().AddForce(transform.forward*-1 * 4000);
     
 
}