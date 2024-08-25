const express = require('express');
const app = express();

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const user_id = "mohidbabu03";
        const email = "mohidbabushaik3103@domain.com";
        const roll_number = "21BCE9569";

        const numbers = data.filter(x => !isNaN(x));
        const alphabets = data.filter(x => isNaN(x) && /^[a-zA-Z]$/.test(x));
        const lower_case_alphabets = alphabets.filter(x => x === x.toLowerCase());
        const highestLowercaseAlphabet = lower_case_alphabets.length > 0 ? lower_case_alphabets.reduce((a, b) => a > b ? a : b) : null;

        const response = {
            is_success: true,
            user_id: user_id,
            email: email,
            roll_number: roll_number,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
        };

        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
