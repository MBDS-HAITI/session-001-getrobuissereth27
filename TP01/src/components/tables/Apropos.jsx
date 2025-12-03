
import { Paper, Typography } from "@mui/material";

export default function Apropos() {
    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h6">À propos</Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
                Ce projet est réalisé par Getro BUISSERETH — Pétion-Ville, Ouest, Haïti.
            </Typography>
        </Paper>
    );
}
