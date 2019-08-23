function ampaeLoadScript(url,top) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
    if (top) {
      document.head.appendChild(script); // to end of head
    } else {
      document.body.appendChild(script); // to end of body
    }
}
/*
document.writeln("<script type='text/javascript' src=url></script>");
*/
