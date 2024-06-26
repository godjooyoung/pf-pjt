import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {margin: 0; padding: 0;}
    *, *:before, *:after{box-sizing: border-box;}
    html{overflow-y: scroll;}
    body{min-width: 320px;}
    li{list-style: none;}
    a{text-decoration: none; color: inherit;}
    img{border: 0; vertical-align: middle;}
    fieldset{border: none;}
    input, select, button, textarea{vertical-align: middle;}
    button, input[type=button], input[type=image]{cursor: pointer;}
    .blind,legend{position: absolute; left: -9999px;}
    table{border-collapse: collapse;}
    caption{text-indent: -9999px; height: 0; overflow: hidden; font-size: 0;} 
    strong,em,address,th{font-weight: normal; font-style: normal;}
    h1,h2,h3,h4,h5,h6{font-weight: normal; font-size: 100%;}
    .skipmenu a{background: #000; color: #fff; position: absolute; left: 0; top: -500px; width: 100%; text-align: center; padding: 8px 0;z-index: 9999;}
    .skipmenu a:focus{top: 0;}
    button{cursor: pointer;}
    img, video{max-width: 100%}
    
    :root {
			--main-color-blue : #17008C; 	//주요색1
			--main-color-green : #B6F23D;	//주요색2
			--bl-01 : #007AFF;
			--bl-02 : #2B3E48;
			--gr-01 : #001021;
			--gr-02 : #242424;
			--gr-03 : #363636;
			--gr-04 : #BCBCBC;
			--gr-05 : #E4E5E6;
			--gr-06 : #EEEEEE;
			--gr-07 : #F5F5F5;
    }
`;

export default GlobalStyle;