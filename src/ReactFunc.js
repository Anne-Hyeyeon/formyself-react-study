export function createDOM(node) {
    // children이 객체가 아니라 문자열일 경우, 재귀적으로 들어갔을 때 먹히지 않을 수 있음. 따라서 태그가 아닐 경우, 문자열로 들어올 때의 처리 방안을 적어준다.
    if (typeof node === 'string'){
        return document.createTextNode(node);
        //children에 문자열이 들어올 경우 바로 문자열 출력
    }

    const element = document.createElement(node.tag);
    
    Object.entries(node.props)
    .forEach(([name, value]) => element.setAttribute(name, value))

    node.children
    .map(createDOM) //node의 깊이만큼 계속 돌리고 돌리고
    .forEach(element.appendChild.bind(element));
    // 재귀적으로 작동하는 code : 아무리 깊은 자식 요소가 있더라도 작동함.
    return element;
}

export function createElement(tag, props, ...children) {
    props = props || {};

    if (typeof tag === 'function') {
        if (children.length > 0) {
                return tag({
                    ...props,
                    children: children.length === 1 ? children[0] : children,
                })
} else {
    return tag(props);
}} else {
    return { tag, props, children };
}
}

export function render(vdom, container){
    container.appendChild(createDOM(vdom));
}