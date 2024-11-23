const textArea = document.getElementById('floatingTextareaEN')
const textAreaConverted = document.getElementById('floatingTextareaKA')

const EN_ARRAY = [
    'a','b','g','d','e','v','z','T','i','k','l','m','n','o','p','J','r','s',
    't','u','f','q','R','y','S','C','c','Z','w','W','x','j','h'
]
const KA_ARRAY = [
    'ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','კ','ლ','მ','ნ','ო','პ','ჟ',
    'რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ'
]

function handleTextChange() {
    const inputText = textArea.value
    let convertedText = ""
    for (let char of inputText) {
        if (EN_ARRAY.includes(char)){
            const idx = EN_ARRAY.indexOf(char);
            convertedText += KA_ARRAY[idx];
        } else {
            convertedText += char;
        }
    }
    textAreaConverted.value = convertedText;
}

// Function to copy text to clipboard
function copyToClipboard() {
    navigator.clipboard.writeText(textAreaConverted.value).then(function() {
        console.log("Text successfully copied to clipboard");
        confirm("ტექსტი მოკოპირებულია!");
    }).catch(function(err) {
        console.error("Failed to copy text: ", err);
        alert(err);
    });
}


textArea.addEventListener('input', handleTextChange);
