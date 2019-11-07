//select all track links returns array of the elements
const iFrameBtn = document.querySelectorAll(".playLink");

//add event listener to each element in array
iFrameBtn.forEach((item) => {
    item.addEventListener("click", () => {
        event.preventDefault();
        addiFrame(item);
    });
});

//this function will create and replace embeded spotify tracks
function addiFrame(item) {

    //this trys to remove an existing spotify iframe and if it doesnt exist it will just fail but the rest of the code will run.
    try {
        document.querySelector("#spotifyIFrame").remove();
    } catch (error) {

    }

    // create a new iframe element 
    const newiFrame = document.createElement("iframe");

    //split track link to separate track code from url address
    let trackCode = item.href.split("track/");

    //set source to equal the embed url with the track code
    newiFrame.src = `https://open.spotify.com/embed/track/${trackCode[trackCode.length-1]}`;

    newiFrame.id = "spotifyIFrame";

    //set styling attributes
    newiFrame.width = "100%";
    newiFrame.height = "80";
    newiFrame.frameBorder = "0px";
    newiFrame.allow = "encrypted-media";

    //append the iFrame
    document.querySelector("main").appendChild(newiFrame);

    //scroll to iFrame
    newiFrame.scrollIntoView({ behavior: "smooth" });
}