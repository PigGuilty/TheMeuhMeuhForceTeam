#pragma strict

var ButtonPlay:Rect;
var ButtonQuit:Rect;
private var Quit:boolean;
var styleJouer:GUIStyle;

function Start() {
	ButtonPlay.x = Screen.width/2+ButtonPlay.x-ButtonPlay.width;
	ButtonPlay.y = Screen.height/2+ButtonPlay.y-ButtonPlay.height;
	ButtonQuit.x = Screen.width/2+ButtonQuit.x-ButtonQuit.width;
	ButtonQuit.y = Screen.height/2+ButtonQuit.y-ButtonQuit.height;
}

function Update () {
	if(Quit){
		QuitGame();
	}
}

function OnGUI(){
	if(GUI.Button(ButtonPlay,"Jouer")){
		Application.LoadLevel(1);
	}
	if(GUI.Button(ButtonQuit,"Quitter")){
		Quit = true;
	}
}

function QuitGame(){
	yield WaitForSeconds(0.35);
	Application.Quit();
}