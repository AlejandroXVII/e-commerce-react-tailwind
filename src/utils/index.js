export const calTotalPrice = (items) => {
    return items.reduce((acum, item)=> acum + item.price,0);
}