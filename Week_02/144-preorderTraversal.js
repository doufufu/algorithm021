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
var preorderTraversal = function(root) {
    if(!root){return []}
    var list = [];
    loop(root);
    function loop(root){
        list.push(root.val)
        if(root.left){
            loop(root.left);
        }
        if(root.right){
            loop(root.right);
        }
    }
    return list
};
