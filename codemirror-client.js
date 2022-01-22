import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import './codemirror-styles.css';
import "./tomorrow-night-eighties.css"
import mainTXT from './main.txt'
console.log(mainTXT);
const editors = document.createElement('div');
editors.classList.add('editors')
document.body.appendChild(editors);
const editorTextArea1 = document.createElement('textarea');
editors.append(editorTextArea1);
const editorTextArea2 = document.createElement('textarea');
editors.append(editorTextArea2);
const editor1=CodeMirror.fromTextArea(editorTextArea1,{
    // lineNumbers:true,
    theme: 'tomorrow-night-eighties',
});
const editor2=CodeMirror.fromTextArea(editorTextArea2,{
    // lineNumbers:true,
    theme: 'tomorrow-night-eighties',
});
const canvas = document.createElement('canvas');
canvas.classList.add('canvas');
document.body.appendChild(canvas)
const context = canvas.getContext('2d');
context.fillStyle = 'white'
context.fillRect(0,0,canvas.width,canvas.height);
for (let index = 0; index < 10; index++) {
    context.beginPath()
    context.moveTo(Math.random()*canvas.width,Math.random()*canvas.height);
    context.lineTo(Math.random()*canvas.width,Math.random()*canvas.height);
    context.stroke();
}
fetch(mainTXT)
    .then(response=>response.text())
    .then(code=>{
        console.log('code: ',code);
        editor1.setValue(code);
        editor2.setValue(code)
    })