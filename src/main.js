let changeCount = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
}

export function changeCounter(money, change) {
    if (money - 0.25 >= 0.25 || money - 0.25 == 0){
        money = money - 0.25
        change.quarters = change.quarters + 1;
        changeCounter(money, change)
    }
    if (money <= 0) {
        return change
    }
};