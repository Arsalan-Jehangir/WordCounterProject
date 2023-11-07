import inquirer from 'inquirer';
const counter = (text) => text.replace(/\s/g, "").length;
async function startWordCount(counter) {
    do {
        let response = await inquirer.prompt({
            type: "input",
            message: "Write Your Text Here...",
            name: "text"
        });
        console.log(counter(response.text));
    } while (true);
}
startWordCount(counter);
