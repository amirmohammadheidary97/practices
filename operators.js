const ConditionalBranching=`

    if {}
    else {}

    true ? doThis() : doThat()

`

const logiclOperator = `

    || OR  :   
    const result = a || b || c || d
    ** the result would be the first truthy value .
    ** 


    && AND :
    condition = a && b && c && d
    ** the result would be the last truthy value


`
const NullishCoalescingOperator = `

    const result = a ?? b;
    if "a" is defined => result equals "a"
    else => result equals "b"


    difference between || and ?? :
    
    let height = 0;
    alert(height || 100); // 100 => height is falsy
    alert(height ?? 100); // 0   => height is defined (not null neither undefined)

`;