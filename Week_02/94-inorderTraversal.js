/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return []
    let list = []
    loop(root);
    function loop(root){
        if(root.left){
            loop(root.left)
        }
        list.push(root.val)
        if(root.right){
            loop(root.right)
        }
    }
    return list
};
