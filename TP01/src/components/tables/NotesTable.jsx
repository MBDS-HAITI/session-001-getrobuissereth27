// src/components/tables/NotesTable.jsx
import { useMemo, useState } from "react";
import { notes, etudiants, matieres } from "../../data/data";
import {
    Table, TableBody, TableCell, TableHead, TableRow,
    TableContainer, Paper, TableSortLabel, TablePagination, TextField, Box
} from "@mui/material";

function resolveName(etudiantId) {
    const e = etudiants.find(e => e.id === etudiantId);
    return e ? `${e.prenom} ${e.nom}` : "—";
}
function resolveMatiere(matiereId) {
    const m = matieres.find(m => m.id === matiereId);
    return m ? m.libelle : "—";
}

export default function NotesTable() {
    const [orderBy, setOrderBy] = useState("note");
    const [order, setOrder] = useState("desc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [query, setQuery] = useState("");

    const rows = useMemo(() => {
        const withLabels = notes.map(n => ({
            ...n,
            etudiantNom: resolveName(n.etudiantId),
            matiereLibelle: resolveMatiere(n.matiereId),
        }));
        const filtered = withLabels.filter(r =>
            r.etudiantNom.toLowerCase().includes(query.toLowerCase()) ||
            r.matiereLibelle.toLowerCase().includes(query.toLowerCase())
        );
        const sorted = [...filtered].sort((a, b) => {
            const aVal = a[orderBy]; const bVal = b[orderBy];
            if (aVal < bVal) return order === "asc" ? -1 : 1;
            if (aVal > bVal) return order === "asc" ? 1 : -1;
            return 0;
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
                <TextField
                    label="Recherche (étudiant/matière)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    size="small"
                />
            </Box>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "etudiantNom"}
                                    direction={orderBy === "etudiantNom" ? order : "asc"}
                                    onClick={() => handleSort("etudiantNom")}
                                >
                                    Étudiant
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === "matiereLibelle"}
                                    direction={orderBy === "matiereLibelle" ? order : "asc"}
                                    onClick={() => handleSort("matiereLibelle")}
                                >
                                    Matière
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={orderBy === "note"}
                                    direction={orderBy === "note" ? order : "asc"}
                                    onClick={() => handleSort("note")}
                                >
                                    Note
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginated.map((r) => (
                            <TableRow key={r.id} hover>
                                <TableCell>{r.etudiantNom}</TableCell>
                                <TableCell>{r.matiereLibelle}</TableCell>
                                <TableCell align="right">{r.note}</TableCell>
                            </TableRow>
                        ))}
                        {paginated.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={3} align="center">Aucun résultat</TableCell>
                            </TableRow>
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
