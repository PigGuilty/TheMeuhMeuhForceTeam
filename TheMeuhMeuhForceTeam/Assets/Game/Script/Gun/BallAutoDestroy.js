#pragma strict

var seconds: int = 5;

function Start () {
    yield WaitForSeconds(seconds); 
    Destroy(transform.gameObject);
}

function Update () {
    
}