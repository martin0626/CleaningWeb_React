export const handleCopy = (e)=>{
    const data = e.target.textContent

    navigator.clipboard.writeText(data).then(function() {
        alert('Copied to clipboard!');
    }).catch(function(error) {
        console.error('Error copying text: ', error);
    });
}