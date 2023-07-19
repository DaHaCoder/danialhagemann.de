function stripLinenums(code) {
    const lineWithOnlyNumbers = /^[0-9]+$/;

    let newCode = [];

    for (const line of code.split(/\r?\n/)) {
        if (line === "" || lineWithOnlyNumbers.test(line)) {
            continue;
        }

        newCode.push(line);
    }

    return newCode.join("\n"); // FIXME: This will probably not work on Windows
}

const codeBlocks = document.querySelectorAll('figure > pre > code');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
    const code = stripLinenums(codeBlocks[index].innerText);

    copyCodeButton.addEventListener('click', () => {
        window.navigator.clipboard.writeText(code);
        copyCodeButton.classList.remove('fa-copy');
        copyCodeButton.classList.add('fa-check');

        setTimeout(() => {
            copyCodeButton.classList.remove('fa-check');
            copyCodeButton.classList.add('fa-copy');
        }, 2000);
    });
});


// const codeBlocks = document.querySelectorAll('figure > pre > code');
// const copyCodeButtons = document.querySelectorAll('.copy-code-button');
// copyCodeButtons.forEach((copyCodeButton, index) => {
//   const code = codeBlocks[index].innerText;

//   copyCodeButton.addEventListener('click', () => {
//     window.navigator.clipboard.writeText(code);
//     copyCodeButton.classList.remove('fa-copy');
//     copyCodeButton.classList.add('fa-check');

//     setTimeout(() => {
//       copyCodeButton.classList.remove('fa-check');
//       copyCodeButton.classList.add('fa-copy');
//     }, 2000);
//   });
// });
