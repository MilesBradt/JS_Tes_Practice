export function changeCounter(money) {
    let change = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }
    if (money - 0.25 >= 0.25 || money - 0.25 == 0){
        money = money - 0.25;
        change.quarters = change.quarters + 1;
        changeCounter(money)
    }
    if (money == 0) {
        return change
    }
};