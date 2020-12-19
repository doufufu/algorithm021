/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let values = [];
    loop(values, root, 0)
    return values
};

function loop(values, root,k)  {
    if(values[k]===undefined){
        values[k] = []
    }
    values[k].push(root.val);
    if(root.children){
        for(let i = 0; i < root.children.length; i++){
            loop(values, root.children[i], k+1)
        }
    }
}
