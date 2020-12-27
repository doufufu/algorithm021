/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length===0) return null
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])

    root.left = buildTree(preorder.slice(1, mid+1) , inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));
    return root;
};