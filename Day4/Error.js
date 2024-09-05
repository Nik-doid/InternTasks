try {
    let data = JSON.parse('{invalid JSON}');
} catch (error) {
    console.error("An error occurred:", error.message);
}
