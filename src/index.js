import "./styles.css";

document.getElementById("app").innerHTML = `
<dic class="cnt">
<div class="rounded shadow content ">
      <div class="header border-bottom-0">
        <h1 class="center row">Code Challenge  #1</h1>
      </div>
      <div class="content-body py-0">
        <input  id="number" value="0" required/>
        <p>Create and style a centered card component like this 
           with your own original design. Then add JavaScript logic to increment the 
           hidden input number with each button click 0</p>
      </div>
      <div class="footer center">
      <input type="button" class="btn btn-click"
      onclick="changeValue()"
      value="Change Value" />
      </div>
        <div style="padding:10px; color:#3e3e3e" class="cnt">
          <code>
            @ ShaunPx1 get
            Source Code here: <a href="https://github.com/shaungt1/ShaunPX1-Weekly-Code-Challenge ">Git repo</a>
          </code>
          
      </div>
    </div>
    </div>
`;
