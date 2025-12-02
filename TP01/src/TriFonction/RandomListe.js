export function RandomItem(list) {
    if (!list || list.length === 0) return null;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}