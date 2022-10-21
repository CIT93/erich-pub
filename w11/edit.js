const finalOutputElement = document.querySelector('#final-output');
const createdAtElement = document.querySelector('#created-at');
const removeElement = document.querySelector('#remove-suggestion');
const lastEditElement = document.querySelector('#last-edit')
const finalOutputId = location.hash.substring(1);
const finalOutputs = getSavedFinalOutput();
let finalOutput = finalOutputs.find((finalOutput) => finalOutput.id === finalOutputId);

if (!finalOutput) {
  location.assign('index.html');
}

finalOutputElement.textContent = `${finalOutput.verdict} , ${finalOutput.message} , ${finalOutput.list}`
createdAtElement.textContent = `Message was created at: ${moment.unix(finalOutput.createdAt)}`


removeElement.addEventListener('click', (e) => {
    removeResult(finalOutput.id);
    saveFinalOutput(finalOutputs)
    location.assign(`index.html`);
  });