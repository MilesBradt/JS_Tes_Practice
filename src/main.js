

export function changeCounter(money) {
    let change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    if (money - 0.25 == 0){
        change.quarters + 1;
        money = money - 0.25;
        changeCounter(money)
    }
    if (money == 0) {
        return change
    }
};