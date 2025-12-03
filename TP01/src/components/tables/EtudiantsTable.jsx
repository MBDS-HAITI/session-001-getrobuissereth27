
import { useMemo, useState } from "react";
import { etudiants } from "../../data/data";
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    TableContainer, Paper, TableSortLabel, TablePagination, TextField, Box
} from "@mui/material";

export default function EtudiantsTable() {
    const [orderBy, setOrderBy] = useState("nom");
    const [order, setOrder] = useState("asc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [query, setQuery] = useState("");

    const rows = useMemo(() => {
        const filtered = etudiants.filter(e =>
            `${e.prenom} ${e.nom}`.toLowerCase().includes(query.toLowerCase()) ||
            e.email.toLowerCase().includes(query.toLowerCase())
        );
        const sorted = [...filtered].sort((a, b) => {
            const aVal = a[orderBy]; const bVal = b[orderBy];
            return aVal.localeCompare(bVal) * (order === "asc" ? 1 : -1);
        });
        return sorted;
    }, [orderBy, order, query]);

    const handleSort = (key) => {
        if (orderBy === key) setOrder(order === "asc" ? "desc" : "asc");
        else { setOrderBy(key); setOrder("asc"); }
    };

    const paginated = useMemo(() => {
        const start = page * rowsPerPage;
        return rows.slice(start, start + rowsPerPage);
    }, [rows, page, rowsPerPage]);

    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField label="Recherche (nom/email)" value={query} onChange={(e) => setQuery(e.target.value)} size="small" />
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel active={orderBy === "prenom"} direction={orderBy === "prenom" ? order : "asc"} onClick={() => handleSort("prenom")}>
                                    Prénom
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel active={orderBy === "nom"} direction={orderBy === "nom" ? order : "asc"} onClick={() => handleSort("nom")}>
                                    Nom
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginated.map((e) => (
                            <TableRow key={e.id} hover>
                                <TableCell>{e.prenom}</TableCell>
                                <TableCell>{e.nom}</TableCell>
                                <TableCell>{e.email}</TableCell>
                            </TableRow>
                        ))}
                        {paginated.length === 0 && (
                            <TableRow><TableCell colSpan={3} align="center">Aucun résultat</TableCell></TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={(_, p) => setPage(p)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Paper>
    );
}
