var video=document.querySelector('.video');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate -= 0.1;
	console.log("New speed:"+video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	video.playbackRate += 0.1;
	console.log("New speed:"+video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	var ct=video.currentTime;
	var d=video.duration;
	let tt=ct+10;
	if (tt <= d){
		video.currentTime=tt;
	} else{
		video.currentTime=0;
	}
	console.log("Current location: "+video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
if (video.muted){
	video.muuted=false;
	console.log("Unmuteed")
}else{
	video.muted=true;
	console.log("Muted")
}
});

// document.querySelector("#range").addEventListener("click", function() {})