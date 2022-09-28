// $ npx live-server public --host=localhost --port=3000 --no-browser

// 2. Arrow Function
const getNode = (selector, context = document) => context.querySelector(selector);


// 1. Block Scope
{
    // DOM 요소 노드 (객체, Object)
    // 객체 배열객체 함수객체 << 변경되면 안되기 때문에 const 사용

    // 숫자, 문자, boolean, null, undefined, Symbol, bigint (primitive type -> let)
    // const button = getNode('.Button');

    //console.log(button);
}

const button = getNode('.Button');
/////////////////////////
// template literal

let firstLetter = 'S';
// button.insertAdjacentHTML('beforeend', '<em>' + firstLetter + '</em>tart');  // legacy 
// button.innerHTML = '<em>' + firstLetter + '</em>tart';  // legacy

// 역따옴표 (backtick: `)
// 보간: interpolation ${}
button.innerHTML = `<em>${firstLetter}</em>tart`;

///////////////////////
// tagged template

// CSS in JS
// styled-components  
// emotion

//const count = getNode('.Count');
const count = getNode`.Count`;
console.log(count);


///////////////////////////////////
// spread syntax  전개 구문

// mixin 
const cssMap = {
    color: 'tan',
    background: 'white'
};

const userMap = {
    fontSize: '2rem',
    color: 'indigo'
};

const cssRuleMixin = {
    ...cssMap,
    ...userMap,  // 중복시 아래것으로 반영 
};

console.log(cssRuleMixin);
console.log(Object.isFrozen(cssRuleMixin));
console.log(Object.freeze(cssRuleMixin));  // Mutable
console.log(Object.isFrozen(cssRuleMixin));

/////////////////////////
// rest parameter

// iterable 조건: Symbol.Iterator << 속성이 있어야 한다.
/* function sum() {
    console.log(arguments);
} */
const sum = (first, second, ...args) => {
    console.log(first, second, args)
};


sum(20, 3, -2, 1);


//////////////////////////////////
// destructuring assignment


// var color = cssRuleMixin.color;
// var background = cssRuleMixin.background;
// var fontSize = cssRuleMixin.fontSize;




const stateHook = [
    0,
    (newCount) => { console.log('update count') },
];

// `state` immutable
// updator

const [number, setNumber] = stateHook;  // dar > destructuring array
console.log(number, typeof setNumber);

const {color, background, fontSize} = cssRuleMixin;  // dob > destructuring object

console.log(color);
console.log(background);
console.log(fontSize);

//////////////////////////////

function defaultArg(value, initialValue) {
    // nullish (null or undefined)
    // if (value === undefined || value === null) {
    //     value = initialValue
    // }

    return value ?? initialValue;
}

function getNodeList(selector, context) {
    context = defaultArg(context, document);
    return context.querySelectorAll(selector);
}

// console.log(getNodeList('body *'));
console.log(getNodeList('em', button));


/////////////////////////
// optional chaining
const state = {
    count: 100,
    getCount() {
        return this.count;
    },
    setCount(newCount) {
        this.count = newCount;
    },
}


// if ( 'loadData' in state && typeof state.loadData === 'function' ) {
//     state.loadData();
// }

state.loadData?.();
state.getCount?.();

// ? :
// ??
// ?.

/////////////////////////////////////////////////////
// iterable for loop

m = 'learning'

for (let key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
        let value = o[key];
    }
}

// for (let key of o) {  // o is not iterable
for (let key of Object.entries(o)) {  // o is not iterable
    console.log(key);
}

for (let [key, value] of Object.entries(o)) {
    console.log(key, value);
}

Object.fromEntries(Object.entries(o));