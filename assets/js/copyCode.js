function stripLinenums(code) {
    const emptyLineOrOnlySpaces = /^\s*$/;
    const lineWithOnlyNumbers = /^[0-9]+$/;

    const skipLine = line => emptyLineOrOnlySpaces.test(line) || lineWithOnlyNumbers.test(line);

    const lines = code.split(/\r?\n/);

    let i = 0;
    while (i < lines.length && skipLine(lines[i])) {
        ++i;
    }

    return lines.slice(i).join("\n"); // FIXME: This will probably not work on Windows
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
