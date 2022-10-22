import { createDOM } from "./React";

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

document.querySelector('#root')
.appendChild(createDOM(node));
//node을 입력으로 주고 element를 return하게 된다.
