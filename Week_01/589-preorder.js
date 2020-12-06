/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    if(!root) return res;
    rescore(root);
    return res;

    
    function rescore(root){
        res.push(root.val);
        let child = root.children
        for(let i = 0; i < child.length; i++){
            rescore(child[i])
        }
    }

};
