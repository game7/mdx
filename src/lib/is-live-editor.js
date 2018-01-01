const arr = a => Array.isArray(a) ? a : [a]
const EDITOR_CLASSNAME_REGEX = /language-\.(jsx|html)/

export default ({ className = [] }) => !!arr(className).find(c => EDITOR_CLASSNAME_REGEX.test(c))