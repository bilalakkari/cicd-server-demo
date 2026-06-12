const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('NEW UPDATE, LETS GOOO, CI/CD IS WORKING');
})

app.listen(PORT);
