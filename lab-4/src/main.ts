
// Task 1
import LowSupportHandler from "./Task-1-Chain-of-Responsibility/LowSupportHandler.js";
import MediumSupportHandler from "./Task-1-Chain-of-Responsibility/MediumSupportHandler.js";
import HighSupportHandler from "./Task-1-Chain-of-Responsibility/HighSupportHandler.js";

function task_01() {
    const lowHandler = new LowSupportHandler();
    const mediumHandler = new MediumSupportHandler();
    const highHandler = new HighSupportHandler();

    lowHandler.setNextHandler(mediumHandler).setNextHandler(highHandler);

    lowHandler.handleRequest("проблема з Wi-Fi");
    lowHandler.handleRequest("відсутність звуку на пристрої");
    lowHandler.handleRequest("проблема з батареєю");
}
// task_01();


// Task 2
import Runway from "./Task-2-Intermediary/Runway.js";
import CommandCentre from "./Task-2-Intermediary/CommandCentre.js";
import Aircraft from "./Task-2-Intermediary/Aircraft.js";

function task_02() {
    const runway1 = new Runway(new CommandCentre([], []));
    const runway2 = new Runway(new CommandCentre([], []));
    const aircraft1 = new Aircraft(new CommandCentre([runway1, runway2], []), "Boeing");
    const aircraft2 = new Aircraft(new CommandCentre([runway1, runway2], []), "Airbus");

    aircraft1.send("landing");
    aircraft2.send("landing");
    aircraft1.send("takeoff");
}
// task_02();


// Task 3
import LightElementNode from "./Task-3-Observer/LightElementNode.js";

function task_03() {
    const button = new LightElementNode('button', 'inline', 'double', ['btn'], []);
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });

    console.log(button.outerHTML());
    button.triggerEvent('click');
}
// task_03();


// Task 4
import FileSystemImageLoadingStrategy from "./Task-4-Strategy/FileSystemImageLoadingStrategy.js";
import NetworkImageLoadingStrategy from "./Task-4-Strategy/NetworkImageLoadingStrategy.js";
import Image from "./Task-4-Strategy/Image.js";

function task_04() {
    const fileSystemStrategy = new FileSystemImageLoadingStrategy();
    const networkStrategy = new NetworkImageLoadingStrategy();

    const image = new Image(fileSystemStrategy);
    image.loadImage("/path/to/image.png");

    image.setLoadingStrategy(networkStrategy);
    image.loadImage("http://example.com/image.jpg");
}
// task_04();


// Task 5
import TextEditor from "./Task-5-Memento/TextEditor.js";

function task_05() {
    const editor = new TextEditor("Initial content");

    console.log("Initial content:", editor.getContent());

    editor.setContent("New content");
    console.log("Updated content:", editor.getContent());

    editor.save();

    editor.setContent("Even newer content");
    console.log("Updated content:", editor.getContent());

    editor.undo();
    console.log("After undo:", editor.getContent());
}
task_05();
