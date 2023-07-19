function stripLinenums(code) {
    const emptyLineOrOnlySpaces = /^\s*$/;
    const lineWithOnlyNumbers = /^[0-9]+$/;

    const lines = code.split(/\r?\n/);

    let newCode = [];

    let i = 0;
    while (emptyLineOrOnlySpaces.test(lines[i]) || lineWithOnlyNumbers.test(lines[i])) {
        ++i;
    }

    for (; i < lines.length; ++i) {
        newCode.push(lines[i]);
    }

    return newCode.join("\n"); // FIXME: This will probably not work on Windows
}


// function stripLinenums(code) {
//     const lineWithOnlyNumbers = /^[0-9]+$/;

//     let newCode = [];

//     for (const line of code.split(/\r?\n/)) {
//         if (line === "" || lineWithOnlyNumbers.test(line)) {
//             continue;
//         }

//         newCode.push(line);
//     }

//     return newCode.join("\n"); // FIXME: This will probably not work on Windows
// }

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
