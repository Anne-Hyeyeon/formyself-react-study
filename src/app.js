/* @jsx createElement */
import { createDOM, createElement, render } from "./React";


// 초기 
/*
const node = {
    tag: "p",
    props: {},
    children: [
        {
            tag: "h1",
            props: {},
            children: [
                //자식 요소로 태그도 있을 수 있지만, text 컨텐츠도 가능하다.
                "리액트 만들기"
            ],
        },
        {
            tag: "ul",
            props: {},
            children: [
                {
                    tag: "li",
                    props: {
                        style: "color: red",
                    },
                    children: ["첫 번째 아이템"],
                },
                {
                    tag: "li",
                    props: {
                        style: "color: teal"
                    },
                    children: ["두 번째 아이템"],
                },
                {
                    tag: "li",
                    props: {
                        style: "color: hotpink"
                    },
                    children: ["세 번째 아이템"],
                }
            ],
        }
    ],
}
*/ 

// createElement 이용
/*
const vdom = createElement('p', {}, createElement('h1', {}, "React 만들기"),
createElement('ul', {},
        createElement('li', { style : "color: red" }, "첫 번째 아이템"),
        createElement('li', { style : "color: blue" }, "두 번째 아이템"),
        createElement('li', { style : "color: green" }, "세 번째 아이템"),
    )
);
*/

const vdom = <p>
    <h1> React 만들기! </h1>
    <ul>
        <li style="color:red">첫 번째 아이템</li>
        <li style="color:blue">두 번째 아이템</li>
        <li style="color:green">세 번째 아이템</li>
    </ul>

</p>

render(vdom, document.querySelector('#root'));
//node을 입력으로 주고 element를 return하게 된다.
