export function convertValueFromPrice(price) {
    let remainingFrom = price > 100 ? price - 100 : 0;
    let remainingPoints = remainingFrom * 2;
    let overFifty = price >= 50 ? 50 : 0;
    return remainingPoints + overFifty;
}


export const defaultJSON = {
    users: [
        {
            name: "Prashant", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Gautam",
            data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Ankit", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Nishat", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Amrik", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Manisha", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        },
        {
            name: "Harpreet", data: [
                [{ month: 'Jan', expense: 120 }, { month: 'Feb', expense: 170 }, { month: 'Mar', expense: 89 }],
                [{ month: 'Apr', expense: 120 }, { month: 'May', expense: 170 }, { month: 'Jun', expense: 89 }],
                [{ month: 'Jul', expense: 120 }, { month: 'Aug', expense: 170 }, { month: 'Sep', expense: 89 }],
                [{ month: 'Oct', expense: 120 }, { month: 'Nov', expense: 170 }, { month: 'Dec', expense: 89 }],
            ]
        }
    ]
}


