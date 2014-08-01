#pragma strict

var target: Transform;
var distanceX: float;
var distanceY: float;
var distanceZ: float;

function Start () {

}

function Update () {
	
	this.transform.position.x = target.transform.position.x + distanceX;
	this.transform.position.y = target.transform.position.y + distanceY;
	this.transform.position.z = target.transform.position.z + distanceZ;



}