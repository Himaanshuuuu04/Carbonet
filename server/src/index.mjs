import express from 'express'
import axios from "axios";
import cors from "cors";
import userRoutes from './routes/user.mjs';
import { validationResult } from 'express-validator';
import { emissionsValidationSchema } from './utils/emissionsValidationSchema.mjs';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', userRoutes);
const port = process.env.PORT || 3000
const CLIMATIQ_API_KEY = process.env.CLIMATIQ_API_KEY;

app.post('/api/emissions', emissionsValidationSchema, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { energy, unit } = req.body;
    try {
        const response = await axios.post(
            "https://api.climatiq.io/data/v1/estimate",
            {
                emission_factor: {
                    activity_id: "electricity-supply_grid-source_residual_mix",
                    data_version: "^6",
                },
                parameters: {
                    energy: energy,
                    energy_unit: unit,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${CLIMATIQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Response from Climatiq API:", response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data from Climatiq API:", error.message);
        res.status(500).json({ error: "Failed to fetch data from Climatiq API." });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})