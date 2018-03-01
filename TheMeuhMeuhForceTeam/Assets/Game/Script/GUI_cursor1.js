#pragma strict


function Start () {
	Screen.lockCursor = true;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		Screen.lockCursor = false;
	}
	if(Input.GetKeyDown(KeyCode.F1)){
		Screen.lockCursor = true;
	}
}

function OnGUI() {
	var pos = Rect(0,0,100,50);
	GUI.Label(pos,"appyez sur echap pour afficher la souris");
	var pos2 = Rect(0,50,120,50);
	GUI.Label(pos2,"et cliquez sur le jeu et appuyez sur F1 pour la masquer");
}